import { Router } from "express";
import fs from "fs";
import crypto from "crypto";

var router = Router();

function upsert(list, key, value, target) {
    const index = list.findIndex((item) => item[key] === value);
    const changedList = JSON.parse(JSON.stringify(list));

    if (index !== -1) {
        changedList[index] = { ...list[index], ...target };
    } else {
        changedList.push({
            id: crypto.randomBytes(1).toString("hex"),
            ...target,
        });
    }
    return changedList;
}

router.get("/:pathname", function (req, res, next) {
    const { pathname } = req.params;

    fs.readFile("./db.json", (err, data) => {
        if (err) {
            throw err;
        }

        const json_data = JSON.parse(data);
        const found_list = json_data[pathname];

        res.setHeader("Content-Type", "application/json");
        res.json(found_list);
    });
});

router.post("/:pathname", function (req, res, next) {
    const { pathname } = req.params;
    const key = "date";

    var target = req.body;

    return fs.readFile("./db.json", (err, data) => {
        if (err) {
            throw err;
        }

        const json_data = JSON.parse(data);
        const found_list = json_data[pathname];

        const changed_list = upsert(found_list, key, target[key], target);

        json_data[pathname] = changed_list;
        fs.writeFile("./db.json", JSON.stringify(json_data), () => {});

        res.end("successful");
    });
});

router.options("/:pathname", function (req, res, next) {
    res.writeHead(204); // No Content
    res.end();
});

export default router;

import { Router } from "express";
import fs from "fs";
var router = Router();

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

export default router;

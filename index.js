import http from "http";
import url from "url";
import dotenv from "dotenv";
import { promises as fs } from "fs";
import crypto from "crypto";

dotenv.config();

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

http.createServer(async (req, res) => {
    const dbpath = "./db.json";
    let { pathname, query } = url.parse(req.url, true);
    pathname = pathname.replace("/", "");
    const key = "date";

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    switch (req.method) {
        case "GET":
            const data = await fs.readFile(dbpath);
            const jsonData = JSON.parse(data);
            const foundList = jsonData[pathname];

            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(foundList));

            return;

        case "POST":
            return req.on("data", async (body) => {
                const target = JSON.parse(body);

                const data = await fs.readFile(dbpath);
                const jsonData = JSON.parse(data);
                const foundList = jsonData[pathname];

                const changedList = upsert(foundList, key, target[key], target);
                jsonData[pathname] = changedList;

                fs.writeFile(dbpath, JSON.stringify(jsonData), () => {});

                res.end("successful");
            });

        case "OPTIONS":
            res.writeHead(204); // No Content
            return res.end();

        default:
            return;
    }
}).listen(process.env.PORT);

import http from "http";
import dotenv from "dotenv";
import { promises as fs } from "fs";
import crypto from "crypto";

dotenv.config();

http.createServer(async (req, res) => {
    const dbpath = "./db.json";
    const pathname = "biological-rhythm";

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

                foundList.push({
                    id: crypto.randomBytes(1).toString("hex"),
                    ...target,
                });

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

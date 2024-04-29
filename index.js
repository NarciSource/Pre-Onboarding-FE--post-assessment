import http from "http";
import dotenv from "dotenv";
import fs from "fs";
import crypto from "crypto";

dotenv.config();

http.createServer((req, res) => {
    const dbpath = "./db.json";
    const pathname = "biological-rhythm";

    switch (req.method) {
        case "GET":
            return fs.readFile(dbpath, (err, data) => {
                if (err) {
                    throw err;
                }

                const jsonData = JSON.parse(data);
                const foundList = jsonData[pathname];

                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify(foundList));
            });

        case "POST":
            return req.on("data", (body) => {
                const target = JSON.parse(body);

                return fs.readFile(dbpath, (err, data) => {
                    if (err) {
                        throw err;
                    }

                    const jsonData = JSON.parse(data);
                    const foundList = jsonData[pathname];

                    foundList.push({
                        id: crypto.randomBytes(1).toString("hex"),
                        ...target,
                    });

                    fs.writeFile(dbpath, JSON.stringify(jsonData), () => {});

                    res.end("successful");
                });
            });

        default:
            return;
    }
}).listen(process.env.PORT);

import http from "http";
import dotenv from "dotenv";
import fs from "fs";

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
            return;

        default:
            return;
    }
}).listen(process.env.PORT);

import http from "http";
import dotenv from "dotenv";

dotenv.config();

http.createServer((req, res) => {
    res.end("Hello");
}).listen(process.env.PORT);

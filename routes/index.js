import { Router } from "express";
import dbClient from "../db/dbClient.js";

var router = Router();

async function upsert(table, key, target) {
    const isExist = await dbClient(table).where(key, target[key]).first();

    if (isExist) {
        await dbClient(table).where(key, target[key]).update(target);
    } else {
        await dbClient(table).insert(target);
    }
}

router.get("/:pathname", async function (req, res, next) {
    const { pathname } = req.params;
    const { key, gte, lte } = req.query;
    const table = pathname.replace("-", "_");

    try {
        const found_list = await dbClient(table).whereBetween(key, [gte || "0", lte || "Z"]);

        res.setHeader("Content-Type", "application/json");
        res.json(found_list);
    } catch (_) {
        const error = new Error("No exist.");
        error.status = 404;
        return next(error);
    }
});

router.post("/:pathname", async function (req, res, next) {
    const { pathname } = req.params;
    const { key } = req.query;
    const table = pathname.replace("-", "_");
    const target = req.body;

    try {
        await upsert(table, key, target);
        res.end("successful");
    } catch (_) {
        const error = new Error("No exist.");
        error.status = 404;
        return next(error);
    }
});

router.options("/:pathname", function (req, res, next) {
    res.writeHead(204); // No Content
    res.end();
});

export default router;

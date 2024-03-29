import { Router } from "express";
import queues from "../../../queues";
import gramtgcalls from "../../../client/gramtgcalls";

const router = Router();

router.get("/stop", async (req, res) => {
    const chatId = Number(req.query.chatId);

    if (chatId) {
        queues.clear(chatId);
        res.json({ ok: true, result: await gramtgcalls.stop(chatId) });
        return;
    }

    res.json({ ok: false, result: false });
});

export default router;

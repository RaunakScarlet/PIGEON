import express from "express";
import { createTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/coment-controller.js";

const router = express.Router();
router.post("/tweets", createTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

export default router;

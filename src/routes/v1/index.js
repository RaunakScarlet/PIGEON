import express from "express";
import { createTweet, getTweet } from "../../controllers/tweet-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from "../../controllers/coment-controller.js";
import { signup, login } from "../../controllers/auth-controller.js";

import { authenticate } from "../../middlewares/authenticate.js";

const router = express.Router();

router.get("/tweets/:id", getTweet);
router.post("/signup", signup);
router.post("/login", login);
router.post("/tweets", authenticate, createTweet);

router.post("/likes/toggle", toggleLike);

router.post("/comments", createComment);

export default router;

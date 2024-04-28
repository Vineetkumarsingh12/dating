
import express from "express";
import { getMyProfile, login, logout, newUser } from "../controller/auth.js";
import { isAuthenticated } from "../middleware/auth.js";
import { singleAvatar } from "../utils/multer.js";

const router = express.Router();

// Routes accessible without authentication
router.post("/new", singleAvatar, newUser);
router.post("/login", login);

// Routes that require authentication
router.use(isAuthenticated);

router.get("/me", getMyProfile);

router.get("/logout", logout);

export default router;

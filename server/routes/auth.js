import express from "express";
import {

  getMyProfile,
  login,
  logout,
  newUser,
} from "../controller/auth.js";

import { isAuthenticated } from "../middleware/auth.js";
import { singleAvatar } from "../utils/multer.js";

const router = express.Router();

router.post("/new", singleAvatar,  newUser);
router.post("/login", login);

// After here user must be logged in to access the routes

router.use(isAuthenticated);

router.get("/me", getMyProfile);

router.get("/logout", logout);

export default router;

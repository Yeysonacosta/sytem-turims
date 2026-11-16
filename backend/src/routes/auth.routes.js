import { Router } from "express";
import {
  login,
  logout,
  me,
  refresh,
} from "../controllers/auth.controller.js";
import { requireAdmin } from "../middleware/requireAdmin.js";

const router = Router();

router.post("/login", login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", requireAdmin, me);

export default router;

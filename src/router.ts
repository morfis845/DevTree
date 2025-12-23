import { Router } from "express";
import { body } from "express-validator";
import { registerUser } from "./handlers";

const router = Router();

// Reigter and Authentication user
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("Handle is required"),
  registerUser
);

export default router;

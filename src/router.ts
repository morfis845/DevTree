import { Router } from "express";
import { registerUser } from "./handlers";

const router = Router();

// Reigter and Authentication user
router.post("/auth/register", registerUser);

export default router;

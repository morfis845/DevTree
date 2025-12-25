import { Router } from "express";
import { body } from "express-validator";
import { getUser, login, registerUser, updateUser } from "./handlers";
import { handleInputErrors } from "./middleware/validation";
import { authenticate } from "./middleware/auth";

const router = Router();

// Reigter and Authentication user
router.post(
  "/auth/register",
  body("handle").notEmpty().withMessage("Handle is required"),
  body("name").notEmpty().withMessage("Name is required"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one uppercase letter")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%^&*(),.?":{}|<>]/)
    .withMessage("Password must contain at least one special character"),
  body("email").isEmail().withMessage("Valid email is required"),
  handleInputErrors,
  registerUser
);

router.post(
  "/auth/login",
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
  handleInputErrors,
  login
);

router.get("/user", authenticate, getUser);
router.patch(
  "/user",
  body("handle").notEmpty().withMessage("Handle is required"),
  handleInputErrors,
  authenticate,
  updateUser
);

export default router;

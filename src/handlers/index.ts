import { Request, Response } from "express";
import { body } from "express-validator";
import slug from "slug";
import { logger, LogEmoji } from "../utils/logger";
import User from "../models/User";
import { comparePassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, handle } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      logger.warn({ event: "EMAIL_ALREADY_EXISTS", emoji: LogEmoji.WARNING });
      return res.status(400).json({ message: "User already exists" });
    }

    const normalizedHandle = slug(handle, "").toLowerCase();
    const handleExists = await User.findOne({ handle: normalizedHandle });
    if (handleExists) {
      logger.warn({ event: "USER_ALREADY_EXISTS", emoji: LogEmoji.WARNING });
      return res.status(400).json({ message: "Username already exists" });
    }

    const hashedPassword = await hashPassword(password);

    await User.create({
      ...req.body,
      password: hashedPassword,
      handle: normalizedHandle,
    });

    logger.info({ event: "USER_REGISTERED", emoji: LogEmoji.SUCCESS });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    logger.error({
      event: "USER_REGISTER_FAILED",
      error: error instanceof Error ? error.message : error,
      emoji: LogEmoji.ERROR,
    });

    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  if (!(await comparePassword(password, user.password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  generateJWT(user);

  res.status(200).json({
    message: "Login successful",
    user: { id: user._id, email: user.email, handle: user.handle },
  });
};

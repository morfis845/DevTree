import { Request, Response } from "express";
import { validationResult } from "express-validator";
import slug from "slug";
import { logger, LogEmoji } from "../utils/logger";
import User from "../models/User";
import { hashPassword } from "../utils/auth";

export const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("Validation errors:");
    return res.status(400).json({ errors: errors.array() });
  }

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

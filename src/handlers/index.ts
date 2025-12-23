import colors from "colors";
import User from "../models/User";
import { Request, Response } from "express";
import { logger } from "../utils/logger";
import { hashPassword } from "../utils/auth";

export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    logger.warn("Intento de registro de usuario existente");
    return res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await hashPassword(password);
  await User.create({ ...req.body, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully" });
};

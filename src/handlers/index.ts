import colors from "colors";
import User from "../models/User";
import { Request, Response } from "express";
import { logger } from "../utils/logger";

export const registerUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    logger.warn("Intento de registro de usuario existente");
    return res.status(400).json({ message: "User already exists" });
  }
  await User.create(req.body);
  res.status(201).json({ message: "User registered successfully" });
};

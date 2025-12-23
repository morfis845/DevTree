import User from "../models/User";
import { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  await User.create(req.body);
  res.status(201).json({ message: "User registered successfully" });
};

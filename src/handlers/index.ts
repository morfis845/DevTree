import { Request, Response } from "express";
import slug from "slug";
import { logger, LogEmoji } from "../utils/logger";
import User from "../models/User";
import { comparePassword, hashPassword } from "../utils/auth";
import { generateJWT } from "../utils/jwt";
import formidable from "formidable";
import { v4 as uuid } from "uuid";
import cloudinary from "../config/cloudinary";

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

  const token = generateJWT({ id: user._id });

  res.status(200).send({
    message: "Login successful",
    token,
  });
};

export const getUser = async (req: Request, res: Response) => {
  return res.status(200).json(req.user);
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { description, handle } = req.body;
    const normalizedHandle = slug(handle, "").toLowerCase();
    const handleExists = await User.findOne({ handle: normalizedHandle });
    if (
      handleExists &&
      handleExists._id.toString() !== req.user._id.toString()
    ) {
      logger.warn({ event: "USER_ALREADY_EXISTS", emoji: LogEmoji.WARNING });
      return res.status(400).json({ message: "Username already exists" });
    }

    req.user.description = description;
    req.user.handle = normalizedHandle;
    await req.user.save();
    return res
      .status(200)
      .json({ message: "User updated successfully", user: req.user });
  } catch (e) {
    const error = new Error("Not implemented yet");
    return res.status(501).json({ message: error.message });
  }
};

export const uploadImage = async (req: Request, res: Response) => {
  const form = formidable({ multiples: false });

  form.parse(req, async (err, fields, files) => {
    cloudinary.uploader.upload(
      files.file[0].filepath,
      { public_id: uuid() },
      async function (error, result) {
        if (error) {
          return res.status(500).json({ message: "Image upload failed" });
        }
        if (result) {
          req.user.image = result.secure_url;
          await req.user.save();
          return res.status(200).json({
            message: "Image uploaded successfully",
            image: result.secure_url,
          });
        }
      }
    );
  });
};

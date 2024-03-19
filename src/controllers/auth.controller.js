import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });

    res.cookie("token", token);
    res.json(userSaved);
  } catch (error) {
    // En caso de error se notifica al cliente
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFounded = await User.findOne({ email });

    if (!userFounded)
      return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFounded.password);

    if (!isMatch) return res.status(400).json({ message: "Inorrect password" });

    const token = await createAccesToken({ id: userFounded._id });

    res.cookie("token", token);
    res.json(userFounded);
  } catch (error) {
    // En caso de error se notifica al cliente
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFounded = await User.findById(req.user.id);
  if (!userFounded) return res.status(400).json({ message: "No user Found" });
  
  return res.json({
    id: userFounded._id,
    username: userFounded.username,
    email: userFounded.email,
    createdAt: userFounded.createdAt,
    updatedAt: userFounded.updatedAt,
  });
};

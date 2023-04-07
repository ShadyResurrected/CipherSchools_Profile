import { User } from "../models/user.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user)
      return res.json({ success: false, message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    return (user = await User.create({
      name,
      email,
      password: hashedPassword,
    }));
  } catch (error) {
    console.log(error);
    res.json({ success: false, error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user)
      return res.json({ success: false, message: "User is not registered" });

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res.json({ success: false, message: "Invalid email or password" });

    return res.json({ success: true, message: "Logged In successfully" });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};

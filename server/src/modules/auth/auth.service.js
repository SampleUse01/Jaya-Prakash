import bcrypt from "bcryptjs";
import User
  from "../users/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken
} from "../../utils/jwt.js";


export const registerUser =
  async (data) => {
    const existing =
      await User.findOne({
        email: data.email
      });

    if (existing) {
      throw new Error(
        "Email already exists"
      );
    }

    const hash =
      await bcrypt.hash(
        data.password,
        12
      );

    data.password = hash;

    const user =
      await User.create(data);

    return user;
  };


export const loginUser = async (
  email,
  password
) => {

  const user = await User.findOne({
    email
  });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const valid = await bcrypt.compare(
    password,
    user.password
  );

  if (!valid) {
    throw new Error(
      "Invalid Credentials"
    );
  }

  const accessToken =
    generateAccessToken({
      id: user._id,
      role: user.role,
    });

  const refreshToken =
    generateRefreshToken({
      id: user._id,
    });

  return {
    user,
    accessToken,
    refreshToken,
  };
};
import bcrypt from "bcryptjs";
import User from "./user.model.js";

export const getAllUsers = async () => {
  return await User.find().select("-password");
};

export const getUserById = async (id) => {
  return await User.findById(id).select(
    "-password"
  );
};

export const createUser = async (
  userData
) => {
  const existingUser =
    await User.findOne({
      email: userData.email,
    });

  if (existingUser) {
    throw new Error(
      "Email already exists"
    );
  }

  const hashedPassword =
    await bcrypt.hash(
      userData.password,
      12
    );

  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });

  return user;
};

export const updateUser = async (
  id,
  data
) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
    }
  ).select("-password");
};

export const deleteUser = async (
  id
) => {
  return await User.findByIdAndDelete(
    id
  );
};
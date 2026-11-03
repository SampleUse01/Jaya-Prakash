// import User from "./user.model.js";

// export const getUsers =
// async (req, res, next) => {

//   try {

//     const users =
//       await User.find()
//       .select("-password");

//     res.json({
//       success: true,
//       count: users.length,
//       data: users
//     });

//   } catch (error) {
//     next(error);
//   }
// };

import * as UserService from "./user.service.js";

export const getUsers = async (
  req,
  res,
  next
) => {
  try {
    const users =
      await UserService.getAllUsers();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export const getUser = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await UserService.getUserById(
        req.params.id
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await UserService.createUser(
        req.body
      );

    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req,
  res,
  next
) => {
  try {
    const user =
      await UserService.updateUser(
        req.params.id,
        req.body
      );

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req,
  res,
  next
) => {
  try {
    await UserService.deleteUser(
      req.params.id
    );

    res.status(200).json({
      success: true,
      message:
        "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
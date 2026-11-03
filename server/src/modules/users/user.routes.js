import express from "express";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "./user.controller.js";

import {
  authenticate,
} from "../../middleware/auth.js";

import {
  authorize,
} from "../../middleware/roles.js";

const router = express.Router();

router.get(
  "/",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "ADMIN"
  ),
  getUsers
);

router.get(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN",
    "ADMIN"
  ),
  getUser
);

router.post(
  "/",
  authenticate,
  authorize(
    "SUPER_ADMIN"
  ),
  createUser
);

router.put(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN"
  ),
  updateUser
);

router.delete(
  "/:id",
  authenticate,
  authorize(
    "SUPER_ADMIN"
  ),
  deleteUser
);

export default router;
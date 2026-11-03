import bcrypt from "bcryptjs";
import User from "../modules/users/user.model.js";

export const seedAdmin = async () => {
  try {
    const superAdminExists =
      await User.findOne({
        role: "SUPER_ADMIN",
      });

    if (!superAdminExists) {
      const hash =
        await bcrypt.hash(
          "SuperAdmin@123",
          12
        );

      // await User.create({
      //   employeeId: "EMP0001",
      //   firstName: "Super",
      //   lastName: "Admin",
      //   email: "superadmin@attendance.com",
      //   password: hash,
      //   role: "SUPER_ADMIN",
      // });

      await User.create({
        employeeId: "EMP0003",
        firstName: "User",
        lastName: "One",
        email: "userOne@attendance.com",
        password: hash,
        role: "USER",
      });

      console.log(
        "✅ Super Admin Created"
      );
    }

    const adminExists =
      await User.findOne({
        email: "admin@attendance.com",
      });

    if (!adminExists) {
      const hash =
        await bcrypt.hash(
          "Admin@123",
          12
        );

      await User.create({
        employeeId: "EMP0002",
        firstName: "System",
        lastName: "Admin",
        email: "admin@attendance.com",
        password: hash,
        role: "ADMIN",
      });

      console.log(
        "✅ Admin Created"
      );
    }
  } catch (error) {
    console.error(
      "Seeder Error:",
      error
    );
  }
};
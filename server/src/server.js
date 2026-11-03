import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

import { connectDB } from "./config/database.js";

// connectDB();

// app.listen(
//   process.env.PORT,
//   () => {
//     console.log(
//       `Server Running successfully on port ${process.env.PORT}`
//     );
//   }
// );


import { seedAdmin }
from "./seeders/seedAdmin.js";

const startServer = async () => {
  try {

    await connectDB();

    await seedAdmin();

    app.listen(
      process.env.PORT,
      () => {
        console.log(
          `Server Running successfully on port ${process.env.PORT}`
        );
      }
    );

  } catch (error) {
    console.error(error);
  }
};

startServer();
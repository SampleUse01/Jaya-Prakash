import mongoose from "mongoose";

const userSchema =
new mongoose.Schema(
{
  employeeId: {
    type: String,
    unique: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    unique: true,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: [
      "SUPER_ADMIN",
      "ADMIN",
      "USER"
    ],
    default: "USER"
  },

  active: {
    type: Boolean,
    default: true
  }

},
{
  timestamps:true
}
);

export default mongoose.model(
  "User",
  userSchema
);

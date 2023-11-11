import mongoose from "mongoose";
import bcrypt from "bcrypt";
// Define mongoose schemas
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

const SALT = bcrypt.genSaltSync(10);

userSchema.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);

import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const SALT = bcrypt.genSaltSync(10);

adminSchema.pre("save", function (next) {
  const admin = this;
  const encryptedPassword = bcrypt.hashSync(admin.password, SALT);
  admin.password = encryptedPassword;
  next();
});

export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);

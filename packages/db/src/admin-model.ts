import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String ,sparse: true},
    name: {
      type: String
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);  


export const Admin =
  mongoose.models.Admin || mongoose.model("Admin", adminSchema);

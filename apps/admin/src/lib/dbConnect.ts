/* eslint-disable no-console */
import mongoose from "mongoose";

let alreadyDone = false;

export async function ensureDbConnected() {
  if (alreadyDone) {
    return;
  }
  alreadyDone = true;
  console.log("MONGO URL", process.env.MONGO_URL);

  await mongoose.connect(process.env.MONGO_URL!);
  console.log("MongoDB connected");
}

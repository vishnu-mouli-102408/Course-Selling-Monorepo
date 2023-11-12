/* eslint-disable import/no-named-as-default */
/* eslint-disable no-console */
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import type { Provider } from "next-auth/providers";
import { Admin } from "db";
import { comparePassword } from "common"
import { ensureDbConnected } from "../../../../lib/dbConnect";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET || "",
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email Address",
          type: "text",
          placeholder: "Enter your email address",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        await ensureDbConnected();
        if (!credentials) {
          return null;
        }
        const email = credentials.email;
        const password = credentials.password;
        // Add logic here to look up the user from the credentials supplied
        const admin = await Admin.findOne({ email });
	console.log("ADMIN",admin)

        if (!admin) {
          const obj = { email, password };
          const newAdmin = new Admin(obj);
          let adminDb = await newAdmin.save();
          console.log("AdminDB", adminDb);
          return {
            id: adminDb._id,
            email: adminDb.email,
          };
        } else {
          //TODO:: Make this safer, encrypt passwords
	const response = comparePassword(password,admin.password)
          if (!response) {
            return null;
          }
          // User is authenticated
          return {
            id: admin._id,
            email: admin.email,
          };
        }
      },
    }),
  ] as Provider[],
  secret: process.env.NEXTAUTH_SECRET || "",
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
};

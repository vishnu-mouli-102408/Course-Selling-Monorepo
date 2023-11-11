import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import { Provider } from "next-auth/providers";
import { ensureDbConnected, Admin } from "../../db/src/index";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET as string,
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
      async authorize(credentials, req) {
        await ensureDbConnected();
        if (!credentials) {
          return null;
        }
        const email = credentials.email;
        const password = credentials.password;
        // Add logic here to look up the user from the credentials supplied
        const admin = await Admin.findOne({ email });

        if (!admin) {
          const obj = { email: email, password: password };
          const newAdmin = new Admin(obj);
          let adminDb = await newAdmin.save();
          console.log(adminDb);
          return {
            id: adminDb._id,
            email: adminDb.email,
          };
        } else {
          //TODO:: Make this safer, encrypt passwords
          if (admin.password !== password) {
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
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    encryption: true,
  },
};

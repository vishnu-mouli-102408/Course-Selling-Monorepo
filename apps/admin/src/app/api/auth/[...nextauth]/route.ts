import NextAuth from "next-auth";
import { options } from "common";

const handler = NextAuth(options);

export { handler as GET, handler as POST };

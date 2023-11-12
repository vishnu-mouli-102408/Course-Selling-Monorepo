import { Landing } from "ui";
import { getServerSession } from "next-auth/next";
import { options } from "./api/auth/[...nextauth]/options";

export default async function Page(): Promise<unknown> {
  const session = await getServerSession(options);
  console.log("Page SRC",session);
  return <Landing session={session} />;
}

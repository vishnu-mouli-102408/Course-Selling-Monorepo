import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export function Landing({ session }): JSX.Element {
  console.log(session);

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxWidth="100vw"
      minHeight="100vh"
    >
      {session ? (
        <Box>
          <Typography> Hello {session.user.email}</Typography>
          <Link href="/api/auth/signout">
            <Button variant="contained">LogOut</Button>
          </Link>
        </Box>
      ) : null}
      {!session && (
        <Box>
          <Typography>Please Login or Sign up to continue</Typography>
          <Box>
            <Link href="/api/auth/signin">
              <Button variant="contained">Login</Button>
            </Link>
            <Link href="/api/auth/signin">
              <Button variant="contained">Sign up</Button>
            </Link>
          </Box>
        </Box>
      )}
    </Box>
  );
}

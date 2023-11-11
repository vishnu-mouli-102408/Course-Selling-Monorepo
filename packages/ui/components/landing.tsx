import { Box, Button, Typography } from "@mui/material";

export function Landing(): JSX.Element {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxWidth="100vw"
      minHeight="100vh"
    >
      <Typography>Please Login or Sign up to continue</Typography>
      <Box>
        <Button variant="contained">Login</Button>
        <Button variant="contained">Sign up</Button>
      </Box>
    </Box>
  );
}

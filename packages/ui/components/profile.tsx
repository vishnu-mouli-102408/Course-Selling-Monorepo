import { Box, Button, Input, TextField, Typography } from "@mui/material";

export function ProfilePage(): JSX.Element {
  return (
    <Box
      alignItems="center"
      bgcolor="white"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxWidth="100vw"
      minHeight="100vh"
      p={2}
    >
      <Typography color="black" p={2} variant="h4">
        Profile Page
      </Typography>
      <TextField
        color="error"
        id="outlined-basic"
        value="Name"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        margin="normal"
        value="Email"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        margin="normal"
        value="Password"
        variant="outlined"
      />
      <Button component="label" variant="contained">
        Upload File
        <Input hidden type="file" />
      </Button>
      <Button variant="contained">Save</Button>
    </Box>
  );
}

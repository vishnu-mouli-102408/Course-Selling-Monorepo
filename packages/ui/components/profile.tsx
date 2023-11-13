import { Box, Button, Input, TextField, Typography } from "@mui/material";

export function ProfilePage(): JSX.Element {
  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxWidth="100vw"
      minHeight="100vh"
      bgcolor="white"
      p={2}
    >
      <Typography color="black" variant="h4" p={2}>Profile Page</Typography>
      <TextField id="outlined-basic" variant="outlined" color="error" value="Name"/>
      <TextField id="outlined-basic" variant="outlined" margin="normal" value="Email"/>
      <TextField id="outlined-basic" variant="outlined" margin="normal" value="Password"/>
      <Button
        variant="contained"
        component="label"
      >
        Upload File
        <Input
          type="file"
          hidden
        />
      </Button>
      <Button variant="contained">Save</Button>
    </Box>
  );
}

import { Box, Input, Typography } from "@mui/material";

function FreeFormBox() {
  return (
    <Box backgroundColor={"pink"}>
      <Typography>Freeform text input</Typography>
      <Input placeholder="Enter Text" />
    </Box>
  );
}

export default FreeFormBox;

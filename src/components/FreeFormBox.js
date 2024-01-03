import { Box, Input } from "@mui/material";

function FreeFormBox() {
  return (
    <Box
      // backgroundColor={"pink"}
      sx={{ width: "100%", borderBottom: "solid 1px black", height: "10%" }}
    >
      <Input sx={{ width: "100%", height: "50%" }} placeholder="Enter Text" />
      <Input sx={{ width: "100%", height: "50%" }} placeholder="Enter Text" />
    </Box>
  );
}

export default FreeFormBox;

import { Box, Input } from "@mui/material";

function Header() {
  return (
    <Box
      // backgroundColor={"yellow"}
      sx={{ borderBottom: "solid 1px black" }}
    >
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
    </Box>
  );
}

export default Header;

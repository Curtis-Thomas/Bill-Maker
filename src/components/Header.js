import { Box, Input, Typography } from "@mui/material";

function Header() {
  return (
    <Box backgroundColor={"yellow"}>
      <Typography>Header</Typography>
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
      <Input sx={{ width: "300px" }} placeholder="Address Line 1" />
    </Box>
  );
}

export default Header;

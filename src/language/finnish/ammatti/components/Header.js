import { Box, Input } from "@mui/material";

function Header() {
  return (
    <Box
      // backgroundColor={"yellow"}
      sx={{ borderBottom: "solid 1px black", width: "100%" }}
    >
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.7rem" }}
        placeholder="Address Line 1"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.7rem" }}
        placeholder="Address Line 2"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.7rem" }}
        placeholder="Address Line 3"
      />
    </Box>
  );
}

export default Header;

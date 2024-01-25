import { Box, Typography } from "@mui/material";

function Header({ addressLine1, addressLine2, addressLine3 }) {
  return (
    <Box
      // backgroundColor={"yellow"}
      sx={{ borderBottom: "solid 1px black", width: "100%" }}
    >
      <Typography>{addressLine1}</Typography>
      <Typography>{addressLine2}</Typography>
      <Typography>{addressLine3}</Typography>
    </Box>
  );
}

export default Header;

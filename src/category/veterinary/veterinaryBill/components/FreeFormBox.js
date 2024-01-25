import { Box, Typography } from "@mui/material";

function FreeFormBox({ textBox }) {
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "solid 1px black",
        height: "100%",
      }}
    >
      <Typography variant="body2" maxLines={5} overflow="hidden">
        {textBox}
      </Typography>
    </Box>
  );
}

export default FreeFormBox;

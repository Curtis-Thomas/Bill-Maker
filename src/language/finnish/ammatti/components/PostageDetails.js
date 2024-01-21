import { Box, Input } from "@mui/material";

function PostageDetails() {
  return (
    <Box
      // backgroundColor={"pink"}
      sx={{
        width: "100%",
        height: "100%",
        borderBottom: "solid 1px black",
        // backgroundColor: "pink",
      }}
    >
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.8rem" }}
        placeholder="Name"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.8rem" }}
        placeholder="Address"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.8rem" }}
        placeholder="City"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.8rem" }}
        placeholder="Zip"
      />
      <Input
        sx={{ width: "100%", height: "15%", fontSize: "0.8rem" }}
        placeholder="Country"
      />
    </Box>
  );
}

export default PostageDetails;

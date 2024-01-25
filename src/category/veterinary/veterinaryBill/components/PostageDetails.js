import { Box, Typography } from "@mui/material";

function PostageDetails({
  postageLineName,
  postageLineAddress,
  postageLineCity,
  postageLineZip,
  postageLineCountry,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderBottom: "solid 1px black",
      }}
    >
      <Typography>{postageLineName}</Typography>
      <Typography>{postageLineAddress}</Typography>
      <Typography>{postageLineCity}</Typography>
      <Typography>{postageLineZip}</Typography>
      <Typography>{postageLineCountry}</Typography>
    </Box>
  );
}

export default PostageDetails;

import { Box, Input, Typography } from "@mui/material";

function BankDetails() {
  return (
    <Box backgroundColor={"orange"}>
      <Typography>Bank Details</Typography>
      <Box>
        <Box sx={{ display: "flex", border: "solid 1px black" }}>
          <Box sx={{ border: "solid 1px black" }}>
            <Typography>Saajan</Typography>
            <Input placeholder="Saajan" />
          </Box>
          <Box sx={{ border: "solid 1px black" }}>
            <Typography>Iban</Typography>
            <Input placeholder="Iban" />
          </Box>
          <Box sx={{ border: "solid 1px black" }}>
            <Typography>Bic</Typography>
            <Input placeholder="Bic" />
          </Box>

          <Box></Box>
        </Box>
        <Box>
          <Box></Box>
        </Box>
      </Box>
      <Box></Box>
      <Box></Box>
    </Box>
  );
}

export default BankDetails;

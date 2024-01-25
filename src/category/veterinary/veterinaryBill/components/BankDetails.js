import { Box, Typography } from "@mui/material";

function BankDetails({
  bankRecipient,
  bankIban,
  bankBic,
  bankRecipient2,
  bankPayer,
  bankSignature,
  bankReferenceNo,
  bankFromAccountNo,
  bankDueDate,
  bankEuro,
}) {
  return (
    <Box
      // backgroundColor={"orange"}
      sx={{ width: "100%", height: "100%", borderBottom: "solid 1px black" }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Recipient</Typography>
          <Typography>{bankRecipient}</Typography>
        </Box>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Iban</Typography>
          <Typography>{bankIban}</Typography>
        </Box>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            borderRight: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Bic</Typography>
          <Typography>{bankBic}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ border: "solid 0px black", width: "100%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Recipient</Typography>
          <Typography>{bankRecipient2}</Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          borderLeft: "solid 1px black",
          borderRight: "solid 1px black",
        }}
      >
        <Box sx={{ border: "solid 0px black", width: "100%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Payer</Typography>
          <Typography>{bankPayer}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ borderRight: "solid 1px black", width: "50%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Signature</Typography>
          <Typography>{bankSignature}</Typography>
        </Box>
        <Box sx={{ border: "solid 0px black", width: "50%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Reference no</Typography>
          <Typography>{bankReferenceNo}</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 0px black" }}>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>
            From account number
          </Typography>
          <Typography>{bankFromAccountNo}</Typography>
        </Box>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Due date</Typography>
          <Typography>{bankDueDate}</Typography>
        </Box>
        <Box
          sx={{
            borderLeft: "solid 1px black",
            borderRight: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Euro</Typography>
          <Typography>{bankEuro}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default BankDetails;

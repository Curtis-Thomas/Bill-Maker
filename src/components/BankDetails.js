import { Box, Input, Typography } from "@mui/material";

function BankDetails() {
  return (
    <Box
      // backgroundColor={"orange"}
      sx={{ width: "100%", borderBottom: "solid 1px black" }}
    >
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography>Saajan</Typography>
          <Input placeholder="Saajan" />
        </Box>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography>Iban</Typography>
          <Input placeholder="Iban" />
        </Box>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            borderRight: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography>Bic</Typography>
          <Input placeholder="Bic" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ border: "solid 0px black", width: "100%" }}>
          <Typography>Saaja</Typography>
          <Input sx={{ width: "100%" }} placeholder="Saaja" />
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
          <Typography>Maksajan</Typography>
          <Input placeholder="Maksajan" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ borderRight: "solid 1px black", width: "50%" }}>
          <Typography>Allekirjoitus</Typography>
          <Input placeholder="Allekirjoitus" />
        </Box>
        <Box sx={{ border: "solid 0px black", width: "50%" }}>
          <Typography>Viitenro</Typography>
          <Input placeholder="Viitenro" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 0px black" }}>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography>Tililtä nro</Typography>
          <Input placeholder="Tililtä nro" />
        </Box>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography>Eräpäivä</Typography>
          <Input placeholder="Eräpäivä" />
        </Box>
        <Box
          sx={{
            borderLeft: "solid 1px black",
            borderRight: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography>Euro</Typography>
          <Input placeholder="Euro" />
        </Box>
      </Box>
    </Box>
  );
}

export default BankDetails;

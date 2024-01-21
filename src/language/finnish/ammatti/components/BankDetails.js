import { Box, Input, Typography } from "@mui/material";

function BankDetails() {
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
          <Typography sx={{ fontSize: "0.7rem" }}>Saajan</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Saajan" />
        </Box>
        <Box
          sx={{
            borderTop: "solid 1px black",
            borderLeft: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Iban</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Iban" />
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
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Bic" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ border: "solid 0px black", width: "100%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Saaja</Typography>
          <Input
            sx={{ fontSize: "0.7rem", width: "100%" }}
            placeholder="Saaja"
          />
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
          <Typography sx={{ fontSize: "0.7rem" }}>Maksajan</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Maksajan" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 1px black" }}>
        <Box sx={{ borderRight: "solid 1px black", width: "50%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Allekirjoitus</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Allekirjoitus" />
        </Box>
        <Box sx={{ border: "solid 0px black", width: "50%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Viitenro</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Viitenro" />
        </Box>
      </Box>

      <Box sx={{ display: "flex", border: "solid 0px black" }}>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Tililtä nro</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Tililtä nro" />
        </Box>
        <Box sx={{ borderLeft: "solid 1px black", width: "33.33%" }}>
          <Typography sx={{ fontSize: "0.7rem" }}>Eräpäivä</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Eräpäivä" />
        </Box>
        <Box
          sx={{
            borderLeft: "solid 1px black",
            borderRight: "solid 1px black",
            width: "33.33%",
          }}
        >
          <Typography sx={{ fontSize: "0.7rem" }}>Euro</Typography>
          <Input sx={{ fontSize: "0.7rem" }} placeholder="Euro" />
        </Box>
      </Box>
    </Box>
  );
}

export default BankDetails;

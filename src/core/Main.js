import { Box, Typography } from "@mui/material";
import CardRouting from "../components/CardRouting";

function Main() {
  return (
    <Box>
      <Box sx={{ p: 5 }}>
        <Typography>Free Vet Bill Maker</Typography>
        <Typography>Languages</Typography>
        <Box>
          <CardRouting cardName="Suomi" navigateTo="/SuomiDash" />
          <CardRouting cardName="English" navigateTo="/EnglishDash" />
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

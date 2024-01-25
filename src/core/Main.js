import { Box } from "@mui/material";
import CardRouting from "../components/CardRouting";
import Hero from "../components/Hero";

function Main() {
  return (
    <Box>
      <Box sx={{}}>
        <Hero />

        <Box sx={{}}>
          <CardRouting cardName="Veterinary" navigateTo="/VeterinaryDash" />
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

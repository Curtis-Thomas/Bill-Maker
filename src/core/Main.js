import { Box } from "@mui/material";
import CardRouting from "../components/CardRouting";
import Hero from "../components/Hero";

function Main() {
  return (
    <Box>
      <Box sx={{}}>
        <Hero />

        <Box>
          <CardRouting cardName="Suomi" navigateTo="/SuomiDash" />
          {/* <CardRouting cardName="English" navigateTo="/EnglishDash" /> */}
        </Box>
      </Box>
    </Box>
  );
}

export default Main;

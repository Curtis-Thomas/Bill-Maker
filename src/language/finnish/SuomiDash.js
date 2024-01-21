import { Typography } from "@mui/material";
import CardRouting from "../../components/CardRouting";

function SuomiDash() {
  return (
    <>
      <Typography>Suomi Dash</Typography>
      <CardRouting cardName="Elainlaakari" navigateTo="/Elainlaakari" />
    </>
  );
}

export default SuomiDash;

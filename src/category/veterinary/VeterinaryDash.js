import { Typography } from "@mui/material";
import CardRouting from "../../components/CardRouting";

function VeterinaryDash() {
  return (
    <>
      <Typography>VeterinaryBill</Typography>
      <CardRouting cardName="VeterinaryBill" navigateTo="/VeterinaryBill" />
    </>
  );
}

export default VeterinaryDash;

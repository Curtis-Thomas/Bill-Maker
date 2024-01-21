import { Typography } from "@mui/material";
import CardRouting from "../components/CardRouting";

function Header() {
  return (
    <>
      <Typography>Header</Typography>
      <CardRouting cardName="Home" navigateTo="/" />
    </>
  );
}

export default Header;

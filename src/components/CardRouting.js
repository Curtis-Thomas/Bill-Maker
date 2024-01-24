import { useNavigate } from "react-router-dom";
import { Card, Typography, ButtonBase } from "@mui/material";

const CardRouting = ({ cardName, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <ButtonBase
      onClick={handleClick}
      sx={{
        width: "33%",
        height: "100%",
        textAlign: "left",
        padding: 1,
        borderRadius: 1,

        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Card
        sx={{
          p: 2,
          m: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#FD5C1A",
          color: "white",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: "bold", height: "17.5%" }}
        >
          {cardName}
        </Typography>
      </Card>
    </ButtonBase>
  );
};

export default CardRouting;

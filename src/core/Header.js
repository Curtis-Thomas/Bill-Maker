import { Box, ButtonBase, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h3" component="h1" color={"#ffffff"}>
        Free Bill Maker
      </Typography>
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
            backgroundColor: "#69A197",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontWeight: "bold", height: "17.5%" }}
          >
            Home
          </Typography>
        </Card>
      </ButtonBase>
    </Box>
  );
}

export default Header;

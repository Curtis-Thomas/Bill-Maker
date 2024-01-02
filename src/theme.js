// styles.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          "&:hover:not($disabled):before": {
            borderBottom: "none",
          },
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "&$disabled": {},
        },
      },
    },
  },
});

export default theme;

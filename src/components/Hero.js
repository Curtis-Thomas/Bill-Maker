import React from "react";

import { Box, Typography, Grid } from "@mui/material";
import GitHubButton from "react-github-btn";

function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#797D81",
        padding: 2,
      }}
    >
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12} md={12} display="flex" justifyContent="center">
          <Typography variant="h6" sx={{ marginRight: 2, color: "#ffffff" }}>
            GitHub
          </Typography>
          <GitHubButton
            href="https://github.com/Curtis-Thomas/Bill-Maker"
            data-icon="octicon-star"
            aria-label="Star buttons/github-buttons on GitHub"
            data-show-count="true"
            data-size="large"
          >
            Star
          </GitHubButton>
        </Grid>

        <Grid item xs={12} sx={{ textAlign: "center", paddingTop: 4 }}>
          <Box>
            <Typography component="h1" variant="h4" color={"#ffffff"}>
              Discover the Best Free Bill Maker - Your Ultimate Open-Source Bill
              Maker
            </Typography>
            <Typography
              component="h2"
              variant="h5"
              sx={{ paddingTop: 1 }}
              color={"#ffffff"}
            >
              Seamlessly create Bills and invoices from any device
            </Typography>
            <Typography
              component="body1"
              variant="body1"
              sx={{ paddingTop: 2 }}
              color={"#ffffff"}
            >
              Welcome to our free Bill maker, the go-to resource for anyone
              seeking reliable, open-source bill making solutions. Perfect for
              people on the go, our platform ensures free easy access to a
              growing range of bill making templates. Whether you are a small
              business owner or a freelancer, our free bill maker is the perfect
              solution for you. Our platform is designed to help you create
              professional-looking bills and invoices in a matter of minutes.
              With our free bill maker, you can create bills and invoices from
              any device. Our platform is designed to be easy to use and
              accessible from any device. Our platform is designed to help you
              create professional-looking bills and invoices in a matter of
              minutes.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;

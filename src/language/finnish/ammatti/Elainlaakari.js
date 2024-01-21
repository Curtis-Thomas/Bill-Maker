import React, { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import theme from "../../../theme";
import TableComponent from "../ammatti/components/TableComponent";
import Header from "../ammatti/components/Header";
import FreeFormBox from "../ammatti/components/FreeFormBox";
import BankDetails from "../ammatti/components/BankDetails";
import ItemBill from "../ammatti/components/ItemBill";
import TaxBox from "../ammatti/components/TaxBox";
import PostageDetails from "./components/PostageDetails";

function Elainlaakari() {
  const lightTheme = createTheme(theme);

  useEffect(() => {
    // Call your generatePDF function here after the page has loaded
  }, []);

  const generatePDF = async () => {
    try {
      const pages = document.querySelectorAll(".pdf-page");
      const pdf = new jsPDF("p", "mm", "a4", true);

      for (let index = 0; index < pages.length; index++) {
        const page = pages[index];

        const canvas = await html2canvas(page, { scale: 2, logging: true });

        const imgData = canvas.toDataURL("image/png");

        if (index > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "PNG", 0, 0, 208, 295);
      }

      pdf.save("bill.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box
        className="pdf-page"
        sx={{
          width: "595px",
          height: "842px",
          margin: "0 auto",
          // backgroundColor: "lightblue",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center", // Center content vertically
        }}
      >
        <Header />
        <PostageDetails />
        <FreeFormBox />
        <ItemBill />
        <TaxBox />
        <BankDetails />
      </Box>

      <Box
        className="pdf-page"
        sx={{
          width: "595px",
          height: "842px",
          margin: "0 auto",
          // backgroundColor: "pink",
          paddingTop: 50,
          display: "flex",
          flexDirection: "column",
          // justifyContent: "",
          alignItems: "center", // Center content vertically
        }}
      >
        <Typography variant="h6">Page 2</Typography>
        <TableComponent />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <Button variant="contained" onClick={generatePDF}>
          Make Bill
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Elainlaakari;

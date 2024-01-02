import {
  Box,
  Button,
  Input,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import theme from "../theme";
import TableComponent from "../components/TableComponent";

function generatePDF() {
  const input = document.getElementById("bill-container");

  // Set the width and height to A4 size in millimeters (approx)
  const pdfWidth = 210;

  html2canvas(input, { scale: 2 }).then((canvas) => {
    // Create a new jsPDF instance with the specified dimensions
    const pdf = new jsPDF("p", "mm", "a4");

    // Calculate the aspect ratio to maintain the content's original size
    const aspectRatio = canvas.width / canvas.height;

    // Calculate the new height based on the A4 width and aspect ratio
    const pdfHeightNew = pdfWidth / aspectRatio;

    // Add the canvas image to the PDF
    pdf.addImage(
      canvas.toDataURL("image/png"),
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeightNew
    );

    // Save the PDF with a given name
    pdf.save("vet_bill.pdf");
  });
}

function Main() {
  const lightTheme = createTheme(theme);
  return (
    <ThemeProvider theme={lightTheme}>
      <Typography
        sx={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Vet Bill Maker
      </Typography>
      <Box id="bill-container" sx={{ width: "100vw" }}>
        <Box
          sx={{
            border: "solid 1px black",
            width: "100vw",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Input placeholder="Enter Address" />
            </Box>
            <Box>
              <Typography>INVOICE</Typography>
            </Box>
          </Box>
          <Box>
            <Input placeholder="Enter Name" />
          </Box>
          <Box>
            <Input placeholder="Enter Details" />
          </Box>
          <Box>
            <Input placeholder="Enter Details" />
          </Box>
          <Box>
            <Input placeholder="Enter Details" />
          </Box>
          <Box>
            <Input placeholder="Enter Details" />
          </Box>
        </Box>
        <Box>
          <TableComponent />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", width: "100vw" }}>
        <Button variant="contained" sx={{ marginTop: 0 }} onClick={generatePDF}>
          Make Bill
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default Main;

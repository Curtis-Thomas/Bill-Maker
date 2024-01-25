import React, { useEffect, useState } from "react";
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
import Header from "./components/Header";
import FreeFormBox from "./components/FreeFormBox";
import BankDetails from "./components/BankDetails";
import ItemBill from "./components/ItemBill";
import PostageDetails from "./components/PostageDetails";
import VeterinaryBillUserInput from "./VeterinaryBillUserInput";

function VeterinaryBill() {
  const lightTheme = createTheme(theme);

  useEffect(() => {
    // Call your generatePDF function here after the page has loaded
  }, []);

  const [addressLines, setAddressLines] = useState({
    addressLine1: "",
    addressLine2: "",
    addressLine3: "",
  });

  const [postageLines, setPostageLines] = useState({
    postageLineName: "",
    postageLineAddress: "",
    postageLineCity: "",
    postageLineZip: "",
    postageLineCountry: "",
  });

  const [textBox, setTextBox] = useState({
    textBox: "",
  });

  const [bill, setBill] = useState({
    billDrugs: "",
    billSupplies: "",
    billProcedures: "",
  });

  const [bankDetails, setBankDetails] = useState({
    bankRecipient: "",
    bankIban: "",
    bankBic: "",
    bankRecipient2: "",
    bankPayer: "",
    bankSignature: "",
    bankReferenceNo: "",
    bankFromAccountNo: "",
    bankDueDate: "",
    bankEuro: "",
  });

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
      <Box sx={{ mt: 2, mb: 2 }}>
        <Typography color={"white"}>Instructions</Typography>
        <Typography color={"white"}>Step 1 - Populate User input.</Typography>
        <Typography color={"white"}>Step 2 - Click Make Bill.</Typography>
        <Typography color={"white"}>
          The bill will then automatically download as a PDF file.
        </Typography>
      </Box>
      <VeterinaryBillUserInput
        setAddressLines={setAddressLines}
        setPostageLines={setPostageLines}
        setTextBox={setTextBox}
        setBill={setBill}
        setBankDetails={setBankDetails}
      />

      <Typography
        sx={{
          backgroundColor: "white",
          textAlign: "center",
          mt: 2,
          mb: 1,
        }}
      >
        Print Preview
      </Typography>
      <Box
        className="pdf-page"
        sx={{
          width: "595px",
          height: "842px",
          margin: "0 auto",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Header
          addressLine1={addressLines.addressLine1}
          addressLine2={addressLines.addressLine2}
          addressLine3={addressLines.addressLine3}
        />
        <PostageDetails
          postageLineName={postageLines.postageLineName}
          postageLineAddress={postageLines.postageLineAddress}
          postageLineCity={postageLines.postageLineCity}
          postageLineZip={postageLines.postageLineZip}
          postageLineCountry={postageLines.postageLineCountry}
        />
        <FreeFormBox textBox={textBox.textBox} />
        <ItemBill
          billDrugs={bill.billDrugs}
          billSupplies={bill.billSupplies}
          billProcedures={bill.billProcedures}
        />
        <BankDetails
          bankRecipient={bankDetails.bankRecipient}
          bankIban={bankDetails.bankIban}
          bankBic={bankDetails.bankBic}
          bankRecipient2={bankDetails.bankRecipient2}
          bankPayer={bankDetails.bankPayer}
          bankSignature={bankDetails.bankSignature}
          bankReferenceNo={bankDetails.bankReferenceNo}
          bankFromAccountNo={bankDetails.bankFromAccountNo}
          bankDueDate={bankDetails.bankDueDate}
          bankEuro={bankDetails.bankEuro}
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", padding: 10 }}>
        <Button
          variant="contained"
          onClick={generatePDF}
          sx={{ backgroundColor: "#FD5C1A" }}
        >
          Make Bill
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default VeterinaryBill;

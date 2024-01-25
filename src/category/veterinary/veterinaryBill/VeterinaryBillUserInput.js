// VeterinaryBillUserInput.jsx

import React from "react";
import { Box, Input, Typography } from "@mui/material";

function VeterinaryBillUserInput({
  setAddressLines,
  setPostageLines,
  setTextBox,
  setBill,
  setBankDetails,
}) {
  const handleInputChange = (event, line) => {
    setAddressLines((prevLines) => ({
      ...prevLines,
      [line]: event.target.value,
    }));
    setPostageLines((prevLines) => ({
      ...prevLines,
      [line]: event.target.value,
    }));
    setTextBox((prevLines) => ({
      ...prevLines,
      [line]: event.target.value,
    }));
    setBill((prevLines) => ({
      ...prevLines,
      [line]: event.target.value,
    }));
    setBankDetails((prevLines) => ({
      ...prevLines,
      [line]: event.target.value,
    }));
  };

  const inputStyle = { width: "100%" };

  return (
    <Box sx={{ backgroundColor: "#303134", mb: 5, p: 2 }}>
      <Typography variant="h6" color="white" mb={2}>
        User Input
      </Typography>

      {/* Address Section */}
      <Box sx={{ backgroundColor: "#ffffff", p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Address</Typography>
        <Input
          sx={inputStyle}
          placeholder="Address line 1"
          onChange={(e) => handleInputChange(e, "addressLine1")}
        />
        <Input
          sx={inputStyle}
          placeholder="Address line 2"
          onChange={(e) => handleInputChange(e, "addressLine2")}
        />
        <Input
          sx={inputStyle}
          placeholder="Address line 3"
          onChange={(e) => handleInputChange(e, "addressLine3")}
        />
      </Box>

      {/* Postage Section */}
      <Box sx={{ backgroundColor: "#F5F5F5", p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Postage</Typography>
        <Input
          sx={inputStyle}
          placeholder="Postage Line Name"
          onChange={(e) => handleInputChange(e, "postageLineName")}
        />{" "}
        <Input
          sx={inputStyle}
          placeholder="Postage Line Address"
          onChange={(e) => handleInputChange(e, "postageLineAddress")}
        />{" "}
        <Input
          sx={inputStyle}
          placeholder="Postage Line City"
          onChange={(e) => handleInputChange(e, "postageLineCity")}
        />{" "}
        <Input
          sx={inputStyle}
          placeholder="Postage Line zip"
          onChange={(e) => handleInputChange(e, "postageLineZip")}
        />{" "}
        <Input
          sx={inputStyle}
          placeholder="Postage Line Country"
          onChange={(e) => handleInputChange(e, "postageLineCountry")}
        />
      </Box>

      {/* TextBox Section */}
      <Box sx={{ backgroundColor: "#F5F5F5", p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Text Box</Typography>
        <Input
          sx={inputStyle}
          placeholder="Text Box"
          onChange={(e) => handleInputChange(e, "textBox")}
        />
      </Box>

      {/* Bill Section */}
      <Box sx={{ backgroundColor: "#F5F5F5", p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Bill</Typography>
        <Input
          sx={inputStyle}
          placeholder="Drugs Price With Tax"
          onChange={(e) => handleInputChange(e, "billDrugs")}
        />
        <Input
          sx={inputStyle}
          placeholder="Supplies Price With Tax"
          onChange={(e) => handleInputChange(e, "billSupplies")}
        />
        <Input
          sx={inputStyle}
          placeholder="Procedure Price With Tax"
          onChange={(e) => handleInputChange(e, "billProcedures")}
        />
      </Box>

      {/* Bank Details Section */}
      <Box sx={{ backgroundColor: "#F5F5F5", p: 2, mb: 3 }}>
        <Typography variant="subtitle1">Bank Details</Typography>
        <Input
          sx={inputStyle}
          placeholder="Recipient"
          onChange={(e) => handleInputChange(e, "bankRecipient")}
        />
        <Input
          sx={inputStyle}
          placeholder="Iban"
          onChange={(e) => handleInputChange(e, "bankIban")}
        />
        <Input
          sx={inputStyle}
          placeholder="Bic"
          onChange={(e) => handleInputChange(e, "bankBic")}
        />
        <Input
          sx={inputStyle}
          placeholder="Recipient 2"
          onChange={(e) => handleInputChange(e, "bankRecipient2")}
        />
        <Input
          sx={inputStyle}
          placeholder="Payer"
          onChange={(e) => handleInputChange(e, "bankPayer")}
        />
        <Input
          sx={inputStyle}
          placeholder="Signature"
          onChange={(e) => handleInputChange(e, "bankSignature")}
        />
        <Input
          sx={inputStyle}
          placeholder="Reference No"
          onChange={(e) => handleInputChange(e, "bankReferenceNo")}
        />
        <Input
          sx={inputStyle}
          placeholder="From Account Number"
          onChange={(e) => handleInputChange(e, "bankFromAccountNo")}
        />
        <Input
          sx={inputStyle}
          placeholder="Due Date"
          onChange={(e) => handleInputChange(e, "bankDueDate")}
        />
        <Input
          sx={inputStyle}
          placeholder="Euro"
          onChange={(e) => handleInputChange(e, "bankEuro")}
        />
      </Box>
    </Box>
  );
}

export default VeterinaryBillUserInput;

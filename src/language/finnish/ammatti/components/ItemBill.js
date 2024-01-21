import React, { useState } from "react";
import {
  Box,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

function ItemBill() {
  const drugsTax = 10;
  const suppliesTax = 14;
  const proceduresTax = 24;

  const [drugsPriceWithTax, setDrugsPriceWithTax] = useState(0);
  const [suppliesPriceWithTax, setSuppliesPriceWithTax] = useState(0);
  const [proceduresPriceWithTax, setProceduresPriceWithTax] = useState(0);

  const calculatePriceWithoutTax = (priceWithTax, taxPercentage) => {
    return priceWithTax / (1 + taxPercentage / 100);
  };

  const calculateTaxAmount = (priceWithTax, taxPercentage) => {
    return priceWithTax - calculatePriceWithoutTax(priceWithTax, taxPercentage);
  };

  const handleDrugsPriceWithTaxChange = (e) => {
    const newPriceWithTax = parseFloat(e.target.value);
    if (!isNaN(newPriceWithTax)) {
      setDrugsPriceWithTax(newPriceWithTax);
    }
  };

  const handleSuppliesPriceWithTaxChange = (e) => {
    const newPriceWithTax = parseFloat(e.target.value);
    if (!isNaN(newPriceWithTax)) {
      setSuppliesPriceWithTax(newPriceWithTax);
    }
  };

  const handleProceduresPriceWithTaxChange = (e) => {
    const newPriceWithTax = parseFloat(e.target.value);
    if (!isNaN(newPriceWithTax)) {
      setProceduresPriceWithTax(newPriceWithTax);
    }
  };

  return (
    <Box
      sx={{ borderBottom: "solid 1px black", width: "100%", height: "100%" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Selite
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Alv %
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Ei Alv
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Sis. Alv
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Alv-osuus
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>Drugs</Typography>
              </TableCell>
              <TableCell>
                <Typography>{drugsTax}</Typography>
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price without tax"
                  value={calculatePriceWithoutTax(
                    drugsPriceWithTax,
                    drugsTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price with tax"
                  onChange={handleDrugsPriceWithTaxChange}
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={calculateTaxAmount(
                    drugsPriceWithTax,
                    drugsTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Supplies</Typography>
              </TableCell>
              <TableCell>
                <Typography>{suppliesTax}</Typography>
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price without tax"
                  value={calculatePriceWithoutTax(
                    suppliesPriceWithTax,
                    suppliesTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price with tax"
                  onChange={handleSuppliesPriceWithTaxChange}
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={calculateTaxAmount(
                    suppliesPriceWithTax,
                    suppliesTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography>Procedures</Typography>
              </TableCell>
              <TableCell>
                <Typography>{proceduresTax}</Typography>
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price without tax"
                  value={calculatePriceWithoutTax(
                    proceduresPriceWithTax,
                    proceduresTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="input price with tax"
                  onChange={handleProceduresPriceWithTaxChange}
                />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={calculateTaxAmount(
                    proceduresPriceWithTax,
                    proceduresTax
                  ).toFixed(2)}
                  readOnly
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ItemBill;

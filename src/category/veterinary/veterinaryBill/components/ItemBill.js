import React from "react";
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

function ItemBill({ billDrugs, billSupplies, billProcedures }) {
  const drugsTax = 10;
  const suppliesTax = 14;
  const proceduresTax = 24;

  const noVatBillDrugs = billDrugs / (1 + drugsTax / 100);
  const noVatBillSupplies = billSupplies / (1 + suppliesTax / 100);
  const noVatBillProcedures = billProcedures / (1 + proceduresTax / 100);

  const vatShareDrugs = billDrugs - noVatBillDrugs;
  const vatShareSupplies = billSupplies - noVatBillSupplies;
  const vatShareProcedures = billProcedures - noVatBillProcedures;

  return (
    <Box
      sx={{ borderBottom: "solid 1px black", width: "100%", height: "100%" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                VAT %
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                No VAT
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                Inc VAT
              </TableCell>
              <TableCell sx={{ fontSize: "0.7rem", whiteSpace: "nowrap" }}>
                VAT-Share
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
                  value={noVatBillDrugs.toFixed(2)}
                />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} value={billDrugs} />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={vatShareDrugs.toFixed(2)}
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
                  value={noVatBillSupplies.toFixed(2)}
                />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} value={billSupplies} />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={vatShareSupplies.toFixed(2)}
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
                  value={noVatBillProcedures.toFixed(2)}
                />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} value={billProcedures} />
              </TableCell>
              <TableCell>
                <Input
                  sx={{ fontSize: "0.7rem" }}
                  placeholder="calculate the tax price of total price"
                  value={vatShareProcedures.toFixed(2)}
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

import React, { useState } from "react";
import {
  Box,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Input,
  Button,
} from "@mui/material";

const TableComponent = () => {
  const [tableData, setTableData] = useState([
    { drugName: "", quantity: "", priceUnit: "", warningPeriod: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const newData = [...tableData];
    newData[index][field] = value;
    setTableData(newData);
  };

  const handleAddRow = () => {
    setTableData([
      ...tableData,
      { drugName: "", quantity: "", priceUnit: "", warningPeriod: "" },
    ]);
  };

  return (
    <Box
      // backgroundColor={"purple"}
      sx={{ width: "100%" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Drug Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price Unit</TableCell>
              <TableCell>Warning Period</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Input
                    placeholder="Enter Details"
                    value={row.drugName}
                    onChange={(e) =>
                      handleInputChange(index, "drugName", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Enter Details"
                    value={row.quantity}
                    onChange={(e) =>
                      handleInputChange(index, "quantity", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Enter Details"
                    value={row.priceUnit}
                    onChange={(e) =>
                      handleInputChange(index, "priceUnit", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Input
                    placeholder="Enter Details"
                    value={row.warningPeriod}
                    onChange={(e) =>
                      handleInputChange(index, "warningPeriod", e.target.value)
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleAddRow}>Add Row</Button>
    </Box>
  );
};

export default TableComponent;

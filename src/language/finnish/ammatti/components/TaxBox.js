import {
  Box,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function TaxBox() {
  return (
    <Box
      // backgroundColor={"magenta"}
      sx={{ height: "100%", width: "100%" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "0.7rem" }}>ALV</TableCell>
              <TableCell sx={{ fontSize: "0.7rem" }}>Veroton</TableCell>
              <TableCell sx={{ fontSize: "0.7rem" }}>Vero</TableCell>
              <TableCell sx={{ fontSize: "0.7rem" }}>Brutto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input sx={{ fontSize: "0.7rem" }} placeholder="Enter Text" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TaxBox;

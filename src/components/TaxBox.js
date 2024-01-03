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
    //   sx={{ borderBottom: "solid 1px black" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ALV</TableCell>
              <TableCell>Veroton</TableCell>
              <TableCell>Vero</TableCell>
              <TableCell>Brutto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Input placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input placeholder="Enter Text" />
              </TableCell>
              <TableCell>
                <Input placeholder="Enter Text" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TaxBox;

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

function ItemBill() {
  return (
    <Box
      // backgroundColor={"cyan"}
      sx={{ borderBottom: "solid 1px black" }}
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Selite</TableCell>
              <TableCell>Alv % </TableCell>
              <TableCell>Ei Alv</TableCell>
              <TableCell>Sis. Alv</TableCell>
              <TableCell>Alv-osuus</TableCell>
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

export default ItemBill;

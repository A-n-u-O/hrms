import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type ColumnHeadProps = {
  label: string;
  key: string;
};

export default function MUITable({
  columnHead,
  data,
}: {
  columnHead: ColumnHeadProps[];
  data: any;
}) {

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "15px",
        marginBottom: "15px",
        marginRight: "25px",
        marginLeft: "25px",
        maxWidth: "1230px",
      }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
          <TableRow>
            {columnHead.map((item) => {
              return (
                <TableCell
                  sx={{ padding: "6px", color: "grey", fontSize: "15px" }}>
                  {item.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: any) => (
            <TableRow key={row.org}>
              {columnHead.map((item, index) => {
                return (
                  <TableCell key={index} sx={{ fontSize: "12px" }}>
                    {row[item.key]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )};


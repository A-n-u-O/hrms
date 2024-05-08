import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";

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
  const getStateStyle = (stat: string) => {
    switch (stat) {
      case "Active":
        return {
          color: "#5ACA75",
          backgroundColor: "#EDF9F0",
          border: "1px solid #5ACA75",
          borderRadius: "4px",
          width: "56px",
        };
      case "Suspended":
        return {
          color: "#E0B878",
          backgroundColor: "#FFF5EA",
          border: "1px solid #E0B878",
          borderRadius: "4px",
          width: "91px",
        };
      case "Deactivated":
        return {
          color: "#F48989",
          backgroundColor: "#FEEFEF",
          border: "1px solid #F48989",
          borderRadius: "4px",
          width: "106px",
        };
      case "Pending":
        return {
          color: "#E0B878",
          backgroundColor: "#FFF5EA",
          border: "1px solid #E0B878",
          borderRadius: "4px",
          width: "90px",
        };
      default:
        return {};
    }
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: "15px",
        marginBottom: "15px",
        marginRight: "30px",
        marginLeft: "25px",
        maxWidth: "1230px",
      }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
          <TableRow>
            {columnHead.map((item) => {
              return (
                <TableCell
                  sx={{ padding: "6px", color: "grey", fontSize: "12px" }}>
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
                if (item.key === "org") {
                  return (
                    <TableCell key={index} sx={{ fontSize: "12px" }}>
                      <div>{row[item.key]}</div>
                      <div style={{ color: "blue", fontWeight: "600" }}>
                        {row.email}
                      </div>
                    </TableCell>
                  );
                } else if (item.key === "stat") {
                  return (
                    <TableCell key={index}>
                      <Box
                        sx={{
                          padding: "6px, 8px, 6px, 8px",
                          fontSize: "12px",
                          ...getStateStyle(row[item.key]),
                        }}>
                        {row[item.key]}
                      </Box>
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell key={index} sx={{ fontSize: "12px" }}>
                      {row[item.key]}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

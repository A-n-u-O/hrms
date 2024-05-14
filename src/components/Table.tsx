import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchBar from "./SearchBar";

type ColumnHeadProps = {
  label: string;
  key: string;
};

type Props = {
  columnHead: ColumnHeadProps[];
  data: any[];
  search: string;
  handleSearch: (search: string) => void;
  pageSize: string | number;
  handlePageSize: (value: string | number) => void;
  page: number;
  handlePage: (value: number) => void;
  total: number;
};

export default function MUITable({
  columnHead,
  data,
  search,
  handleSearch,
  pageSize,
  handlePageSize,
  page,
  handlePage,
  total,
}: Props) {
  return (
    <>
      <SearchBar
        search={search}
        handleSearch={handleSearch}
        pageSize={pageSize}
        handlePageSize={handlePageSize}
        page={page}
        total={total}
        handlepage={handlePage}
      />
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "15px",
          marginBottom: "15px",
          marginRight: "30px",
          marginLeft: "25px",
          width: "95%",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
            <TableRow>
              {columnHead.map((item) => {
                return (
                  <TableCell
                    sx={{ padding: "6px", color: "grey", fontSize: "15px" }}
                  >
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
    </>
  );
}

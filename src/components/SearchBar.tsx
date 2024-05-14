import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const noOfItems = [10, 5, 3];

type SearchBarProps = {
  search: string;
  handleSearch: (search: string) => void;
  pageSize: string | number;
  handlePageSize: (value: string | number) => void;
  page: number;
  handlePage: (search: number) => void;
  total: number;
};

const SearchBar = ({
  search,
  handleSearch,
  pageSize,
  handlePageSize,
  page,
  handlePage,
  total,
}: SearchBarProps) => {
  const numberPage = (page - 1) * Number(pageSize) + 1;
  const count = total / Number(pageSize);
  const currentPage =
    page * Number(pageSize) >= total ? total : page * Number(pageSize);
  return (
    <>
      <Box
        display="flex"
        ml="25px"
        mr="25px"
        padding="5px"
        sx={{
          backgroundColor: "#ffff",
          padding: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* //searchbar  */}
        <TextField
          type="search"
          variant="outlined"
          id="outlined-basic search"
          placeholder="Search"
          sx={{ width: "450px" }}
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          InputProps={{ endAdornment: <SearchIcon /> }}
        />

        {/* Pagination */}
        <Typography sx={{ fontSize: "14px", lineHeight: "21px" }}>
          Showing {numberPage} to {currentPage} of {total} entries
        </Typography>
        <FormControl sx={{ m: 1, width: "110px", border: "none" }} size="small">
        <InputLabel id="demo-select-small-label">Pages</InputLabel>
          <Select
            id="demo-select-small"
            value={pageSize}
            label="items"
            onChange={(e) => {
              handlePageSize(e.target.value);
              handlePage(1);
            }}
          >
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
           <></> */}
            {noOfItems.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <Stack spacing={2}>
          <Pagination
            count={Math.ceil(count)}
            shape="rounded"
            page={page}
            onChange={(e, value) => {
              handlePage(value);
            }}
            sx={{ fontSize: "15px" }}
          />
        </Stack>
      </Box>
    </>
  );
};
export default SearchBar;

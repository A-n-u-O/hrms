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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const noOfItems = [10, 5, 3 ];

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState();
  const [items, setItems] = useState("");

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
        }}>
        {/* //searchbar  */}
        <TextField
          type="search"
          variant="outlined"
          id="outlined-basic search"
          placeholder="Search"
          sx={{ width: "450px" }}
          InputProps={{ endAdornment: <SearchIcon /> }}
        />

        {/* Pagination */}
        <Typography sx={{ fontSize: "14px", lineHeight: "21px" }}>
          Showing 1 to 10 of 10 entries
        </Typography>
        <FormControl sx={{ m: 1, width: "110px", border: "none" }} size="small">
          <Select
            id="demo-select-small"
            value={items}
            label="items"
            onChange={(e) => setItems(e.target.value)}>
            {/* <MenuItem value="">
              <em>None</em>
            </MenuItem>
           <></> */}
              {noOfItems.map((item)=>{
                return <MenuItem value={item}>{item}</MenuItem>
              })}
          
          </Select>
        </FormControl>
        <Stack spacing={2}>
          <Pagination count={10} shape="rounded" sx={{fontSize: '15px'}} />
        </Stack>
      </Box>
    </>
  );
};
export default SearchBar;

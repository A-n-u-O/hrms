import { Box, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const noOfItems = [10, 5, 3];

const SearchBar = () => {
  return (
    <>
      <Box
        display="flex"
        ml="25px"
        sx={{
          backgroundColor: "#ffff",
          padding: "10px",
          justifyContent: "space-between",
        }}>
        {/* //searchbar  */}
        <TextField
          type="search"
          variant="outlined"
          id="outlined-basic search"
          InputProps={{ endAdornment: <SearchIcon /> }}
        />
        <Typography>Showing 1 to 10 of 10 entries</Typography>
        <TextField
          id="select-no-of-items-native"
          select
          defaultValue="10 items"
          SelectProps={{
            native: true,
          }}
          helperText="select no of items to be displayed"
          variant="standard">
          {/* {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))} */}
        </TextField>
      </Box>
    </>
  );
};
export default SearchBar;

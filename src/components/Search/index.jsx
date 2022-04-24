import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ productsData, setFilteredProducts }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Filter the products based on the search term
  const searchProducts = (searchTerm) => {
    const filteredProducts = productsData.filter((product) => {
      return (
        // Search by product brand or product model
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredProducts(filteredProducts);
  };

  // Search on every keystroke and update the filtered products
  useEffect(() => {
    searchProducts(search);
  }, [search]);

  return (
    <>
      <TextField
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          )
        }}
        sx={{ width: "30ch" }}
        id="outlined-basic"
        label="Search..."
        onChange={handleChange}
        name="searchTerm"
        variant="outlined"
      />
    </>
  );
};

export default Search;

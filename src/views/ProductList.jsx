import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsWS";
import { Item, Search } from "../components";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

export const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const localData = localStorage.getItem("localProductList");
  const dataExpiration = localStorage.getItem("listExpiration");
  const now = new Date();
  const expirationTime = 3600000; // 1 hour

  const getAllData = async () => {
    setIsLoading(true);
    try {
      // Check local storage for data and expiration
      if (!localData || dataExpiration < now || localData === "undefined") {
        const res = await getAllProducts();
        setProductsData(res.data);
        // Save the data to local storage
        localStorage.setItem("localProductList", JSON.stringify(res.data));
        // Set the expiration time to 1 hour
        localStorage.setItem("listExpiration", now.getTime() + expirationTime);
        setIsLoading(false);
      } else {
        // Use the data from local storage
        setProductsData(JSON.parse(localData));
        setIsLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  // Show items count on the page
  const showItemsCount = () => {
    search
      ? setItemsCount(filteredProducts.length)
      : setItemsCount(productsData.length);
  };

  useEffect(() => {
    showItemsCount();
  }, [filteredProducts]);

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <CssBaseline />
      <Search
        productsData={productsData}
        setFilteredProducts={setFilteredProducts}
        search={search}
        setSearch={setSearch}
      />
      {/* Show items count when user is searching */}
      <Typography variant="h6body1" gutterBottom>
        {search ? (
          // If search is not empty, show the number of items found
          itemsCount > 0 ? (
            <>{itemsCount} items found</>
          ) : (
            // If search is not empty, but no items are found, show message to user
            <>No items found</>
          )
        ) : (
          <></>
        )}
      </Typography>
      {isLoading ? (
        // If loading, show loading spinner
        <CircularProgress sx={{ mt: 3 }} />
      ) : search ? (
        // If search is not empty, show the filtered products
        filteredProducts.map((product) => (
            <Item product={product} key={product.id} />
        ))
      ) : (
        // If there is no search term, show all products in the list
        productsData.map((product) => (
            <Item product={product} key={product.id} />
        ))
      )}
    </>
  );
};

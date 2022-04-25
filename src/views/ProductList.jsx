import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsWS";
import { Link } from "react-router-dom";
import { Item, Search } from "../components";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

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
      <h1>Product List </h1>
      <Search
        productsData={productsData}
        setFilteredProducts={setFilteredProducts}
        search={search}
        setSearch={setSearch}
      />
      <Typography variant="h6" gutterBottom>
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
        <CircularProgress />
      ) : search ? (
        // If search is not empty, show the filtered products
        filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Item product={product} />
          </Link>
        ))
      ) : (
        // If there is no search term, show all products in the list
        productsData.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <Item product={product} />
          </Link>
        ))
      )}
    </>
  );
};

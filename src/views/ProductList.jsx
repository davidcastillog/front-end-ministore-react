import { useEffect, useState } from "react";
import { getAllProducts } from "../services/productsWS";
import { Link } from "react-router-dom";
import { Item, Search } from "../components";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export const ProductList = () => {
  const [productsData, setProductsData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
        console.log("API data");
        setIsLoading(false);
      } else {
        // Use the data from local storage
        setProductsData(JSON.parse(localData));
        console.log("local data");
        setIsLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <>
      <h1>Product List </h1>
      <Search
        productsData={productsData}
        setFilteredProducts={setFilteredProducts}
      />
      {isLoading ? (
        // Show loading indicator while data is loading
        <CircularProgress color="error" />
      ) : filteredProducts.length > 0 ? (
        <>
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Item product={product} />
            </Link>
          ))}
        </>
      ) : productsData.length > 0 ? (
        <>
          {productsData.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <Item product={product} />
            </Link>
          ))}
        </>
      ) : (
        // If there are no products, show a message to the user
        <Typography variant="h6" color="textSecondary">
          No products found
        </Typography>
      )}
    </>
  );
};

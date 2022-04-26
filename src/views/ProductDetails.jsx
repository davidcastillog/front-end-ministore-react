import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/productsWS";
import { Image, Description, Actions } from "../components";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [isLoading, setIsLoading] = useState(false);

  const localData = localStorage.getItem("recentlyViewed");
  const dataExpiration = localStorage.getItem("recentlyViewedExpiration");
  const now = new Date();
  const expirationTime = 3600000; // 1 hour

  const getOneProduct = async () => {
    setIsLoading(true);
    try {
      // Check local storage for data and expiration
      if (!localData || dataExpiration < now || localData === "undefined") {
        const res = await getProduct(id);
        setProduct(res.data);
        const recentlyViewedArr = [];
        recentlyViewedArr.push(res.data);
        // Save the data to local storage
        localStorage.setItem(
          "recentlyViewed",
          JSON.stringify(recentlyViewedArr)
        );
        // Set the expiration time to 1 hour
        localStorage.setItem(
          "recentlyViewedExpiration",
          now.getTime() + expirationTime
        );
        setIsLoading(false);
      } else {
        // Use the data from local storage
        const recentlyViewedArr = JSON.parse(localData);
        // Check if the product is already in the array
        const isRecetlyViewed = recentlyViewedArr.find(
          (product) => product.id === id
        );
        // If the product is in the recently viewed list, set it to the state
        if (isRecetlyViewed) {
          setProduct(isRecetlyViewed);
        } else {
          // If the product is not in the recently viewed list, get it from the API
          const res = await getProduct(id);
          setProduct(res.data);
          recentlyViewedArr.push(res.data);
          // Save the data to local storage
          localStorage.setItem(
            "recentlyViewed",
            JSON.stringify(recentlyViewedArr)
          );
        }
        setIsLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getOneProduct();
  }, []);

  return (
    <>
      <Container maxWidth="lg">
        {isLoading ? (
          // Show loading indicator while data is loading
          <CircularProgress sx={{ mt: 3 }} />
        ) : (
          <Grid
            container
            justifyContent="center"
            paddingTop={2}
            paddingBottom={4}
          >
            <Grid item xs={12} sm={6}>
              <Image product={product} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Description product={product} />
              <Actions product={product} />
            </Grid>
          </Grid>
        )}
      </Container>
    </>
  );
};

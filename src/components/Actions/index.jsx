import { useEffect, useState, useContext } from "react";
import CartContext from "../../Context";
import { AddToCart } from "../../services/productsWS";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const Actions = ({ product }) => {
  // Context for the cart
  const { setCartItems } = useContext(CartContext);

  // Values for the select menu
  const [values, setValues] = useState({
    id: product.id || "",
    colorCode: product.options?.colors[0].code || "",
    storageCode: product.options?.storages[0].code || ""
  });

  // Set default values for the select menu
  const setValuesToState = () => {
    if (product.options !== undefined) {
      setValues({
        id: product.id,
        colorCode: product.options?.colors[0].code,
        storageCode: product.options?.storages[0].code
      });
    }
  };

  // Update the state when the select menu changes
  useEffect(() => {
    setValuesToState();
  }, [product]);

  // Update the state with user selected values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    const optionsSelected = {
      id: product.id,
      colorCode: values.colorCode,
      storageCode: values.storageCode
    };
    // Send user selectionn to the API to add to the cart
    AddToCart(optionsSelected)
      .then((res) => {
        // Update the cart items in the context (API answer)
        setCartItems(res.data);
      })
      .catch((err) => {
        return err;
      });
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        paddingTop={3}
      >
        {/* Color Selector */}
        <Select
          id="demo-simple-select"
          sx={{
            width: "20ch",
            marginBottom: "1rem"
          }}
          name="colorCode"
          value={values.colorCode}
          onChange={handleChange}
        >
          {product?.options?.colors.map((color, i) => (
            <MenuItem key={i} value={color.code}>
              {color.name}
            </MenuItem>
          ))}
        </Select>
        {/* Storage Selector */}
        <Select
          id="demo-simple-select"
          sx={{
            width: "20ch",
            marginBottom: "1rem"
          }}
          value={values.storageCode}
          name="storageCode"
          onChange={handleChange}
        >
          {product?.options?.storages.map((storage, i) => (
            <MenuItem key={i} value={storage.code}>
              {storage.name}
            </MenuItem>
          ))}
        </Select>
        {/* Add to Cart Button */}
        <Button
          sx={{ width: "23ch", height: "3em" }}
          onClick={handleOnClick}
          variant="contained"
        >
          Añadir
        </Button>
      </Grid>
    </>
  );
};

export default Actions;

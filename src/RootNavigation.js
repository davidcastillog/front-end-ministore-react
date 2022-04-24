import { Routes, Route } from "react-router-dom";
import { ProductList } from "./views/ProductList";
import { ProductDetails } from "./views/ProductDetails";

function RootNavigation (props) {
  return (
    <Routes>
      <Route path="/" element={<ProductList {...props} />} />
      <Route path="/product/:id" element={<ProductDetails {...props} />} />
    </Routes>
  );
}

export default RootNavigation;

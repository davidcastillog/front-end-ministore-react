import { Routes, Route } from "react-router-dom";
import { ProductList } from "./views/ProductList";
import { ProductDetails } from "./views/ProductDetails";

function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default RootNavigation;

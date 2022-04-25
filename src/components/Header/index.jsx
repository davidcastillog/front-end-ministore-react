import { useContext } from "react";
import CartContext from "../../Context";

function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h3>Header</h3>
      <p>{cartItems ? `${cartItems.count}` : 0}</p>
    </>
  );
}

export default Header;

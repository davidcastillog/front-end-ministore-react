import "./App.css";
import { useState } from "react";
import RootNavigation from "./RootNavigation";
import { Header } from "./components";
import CartContext from "./Context"

function App() {
  const [cartItems, setCartItems] = useState({
    count: 0
  });

  return (
    <div className="App">
      <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Header />
      <RootNavigation />
      </CartContext.Provider>
    </div>
  );
}

export default App;

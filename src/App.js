import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useReducer } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ProductsPage from "./components/ProductsPage";

import productsData from "./products-data.json";
import CartPage from "./components/CartPage";

export const cartContext = createContext();

const reducer = (prevState, action) => {
  if (action.type === "ADD") {
    const item = productsData.filter((item) => item.id === action.id)[0];
    return [...prevState, item];
  }
};

function App() {
  const [cartItems, dispatch] = useReducer(reducer, []);

  return (
    <cartContext.Provider value={{ cartItems, dispatch }}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products">
            <ProductsPage products={productsData} />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </Router>
    </cartContext.Provider>
  );
}

export default App;

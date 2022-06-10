import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import Cart from "./views/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

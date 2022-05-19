import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import AboutUs from "./views/AboutUs/AboutUs";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sobre-nosotros" element={<AboutUs />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/category/:categoryId" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;

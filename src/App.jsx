import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import ProductList from "./Pages/ProductList";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gift-gallery" element={<ProductList />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

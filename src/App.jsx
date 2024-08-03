import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ImageSlider from "./components/ImageSlider";
import Content from "./components/Content";
import Products from "./components/Products";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail"; // Import your ProductDetail component

function App() {
  return (
    <Router>
      <div className="w-full h-[70vh] bg-zinc-0">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ImageSlider />
                <Content />
                <Products />
              </>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductStore from "../StoreData.json";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "mens", "womens", "accessories"];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts =
    selectedCategory === "all"
      ? [
          ...ProductStore.products.mens,
          ...ProductStore.products.womens,
          ...ProductStore.products.accessories,
        ]
      : ProductStore.products[selectedCategory];

  return (
    <div className="w-full min-h-[100vh] p-[2vh] px-[30vh] border-t-2 border-zinc-100">
      <div className="categories mb-4 ">
        <h1>Categories: </h1>
        <br />
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`mr-4 p-2 border rounded-[50px] ${
              selectedCategory === category ? "bg-gray-200" : "bg-white"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
        <hr className="mt-4" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <div className="relative w-full h-49">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h1 className="text-xl font-bold mb-2">{product.title}</h1>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${product.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;

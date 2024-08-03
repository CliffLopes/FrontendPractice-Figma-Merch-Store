import React from "react";
import { useParams } from "react-router-dom";
import ProductStore from "../StoreData.json";

function ProductDetail() {
  const { id } = useParams();
  const product = [
    ...ProductStore.products.mens,
    ...ProductStore.products.womens,
    ...ProductStore.products.accessories,
  ].find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full min-h-screen p-[20vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-auto object-cover rounded-[50px]"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <span className="px-4 py-1 text-lg bg-green-600 border-2 text-black border-green-400 rounded-[50px] ">
              {product.brand}
            </span>
            <h3 className="text-lg mb-4">{product.rating}/5 ⭐</h3>

            <div className="size flex gap-1">
              <div className="w-[35px] h-[35px] px-1 rounded-full border border-black hover:bg-zinc-700 hover:text-white flex items-center justify-center">
                S
              </div>
              <div className="w-[35px] h-[35px] px-1 rounded-full border border-black hover:bg-zinc-700 hover:text-white flex items-center justify-center">
                M
              </div>
              <div className="w-[35px] h-[35px] px-1 rounded-full border border-black hover:bg-zinc-700 hover:text-white flex items-center justify-center">
                L
              </div>
              <div className="w-[35px] h-[35px] px-1 rounded-full border border-black hover:bg-zinc-700 hover:text-white flex items-center justify-center">
                XL
              </div>
            </div>

            <span className="text-2xl font-bold mb-4">${product.price}</span>
            <br />
            <button class="w-full hover:bg-green-600 hover:text-white hover:border-green-400 px-4 py-2 border-2 border-black rounded-[50px]">
              Shop Now
            </button>
            {/* Add more product details here */}
            <div className="desc font-semibold py-[5vh]">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

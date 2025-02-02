import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8  flex justify-between items-center">
      <div className="flex space-x-4">
        <button class=" hover:bg-zinc-800 hover:text-white px-4 py-2 border-2 border-black rounded-[50px]">
          Shop
        </button>
        <button class=" hover:bg-zinc-800 hover:text-white px-4 py-2 border-2 border-black rounded-[50px]">
          About
        </button>
      </div>
      <div className="text-center font-bold text-xl">THE FIGMA STORE</div>
      <div className="flex space-x-4 items-center">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 1.5c-2.575 0-4.49 1.593-4.49 5.747s1.664 4.985 1.954 5.27c.267.358.267.855 0 1.213-.238.245-4.544 1.116-6.115 2.723a4.647 4.647 0 0 0-1.665 2.915c-.069.293-.135 1.14-.181 1.88-.043.67.434 1.252 1.443 1.252h18.118c.491 0 1.477-.573 1.435-1.237-.047-.743-.113-1.6-.183-1.895a4.645 4.645 0 0 0-1.664-2.887c-1.572-1.621-5.878-2.493-6.116-2.724a1.019 1.019 0 0 1 0-1.212c.29-.286 1.955-1.103 1.955-5.27 0-4.168-1.85-5.775-4.49-5.775Z"
            ></path>
          </svg>
        </a>
        <div className="country ">
          <button class=" hover:bg-zinc-800 hover:text-white px-4 py-2 border-2 border-black rounded-[50px]">
            United States
          </button>
        </div>
        <div className="cart ">
          <button class=" hover:bg-zinc-800 hover:text-white px-4 py-2 border-2 border-black rounded-[50px]">
            Cart 0
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

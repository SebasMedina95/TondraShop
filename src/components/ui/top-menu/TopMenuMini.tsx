"use client";

import Link from "next/link";
import { useState } from "react";

export const CategoryOptionsSlideshow = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex md:hidden relative flex-col justify-center items-center text-center transition-all mt-2">
        <button
          onClick={toggleMenu}
          className="text-gray-700 rounded-lg border border-indigo-100 p-2 focus:outline-none"
          aria-haspopup="true"
        >
          Mis Categorías Tondra
          <svg
            className="h-5 w-5 inline-block ml-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {
        isOpen && (
          
          <div className="p-1 w-56 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg" id="dropdown">
              
              <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="/gender/men"
              >
                  Hombres
              </Link>
              <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="/gender/women"
              >
                  Mujeres
              </Link>
              <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="/gender/kid"
              >
                  Niños
              </Link>
              <Link
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  href="/gender/unisex"
              >
                  Mixto
              </Link>

              
            </div>
          )
        }
      </div>
    </>
  );
};
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosReturnLeft } from "react-icons/io";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFont.className} antialiased text-9xl`}>404</h2>
        <p className="font-semibold text-xl">Ups!, lo sentimos mucho.</p>
        <p className="font-light">
          <span>La página no fue encontrada.</span>
          <br />
          <span>Puedes regresar al </span>
          <Link
            className="font-normal hover:bg-gray-200 underline transition-all rounded-md"
            href="/"
          >
            <div className="flex items-center justify-center mr-2 m-2 p-2 rounded-md transition-all hover:bg-gray-200">
              <IoIosReturnLeft className="mr-2" size={20} />
              Inicio Tondra Shop
            </div>
          </Link>
        </p>
      </div>

        <div className="px-5 mx-5">
            <Image 
                src="/imgs/starman_750x750.png"
                alt="Starman"
                className="p-5 sm:p-0"
                width={550}
                height={550}
            />
        </div>

    </div>
  );
};
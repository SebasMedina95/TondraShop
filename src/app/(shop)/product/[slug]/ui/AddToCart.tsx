"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { IProduct, ValidSizes } from "@/interfaces/product.interface";
import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

interface IProps {
    product: IProduct
}

export const AddToCart = ({ product }: IProps) => {

  const [size, setSize] = useState<ValidSizes | undefined>(); //Una talla válida
  const [quantity, setQuantity] = useState<number>(1); //Minimamente 1 prenda
  const [errorSize, setErrorSize] = useState<boolean>(false); //Para manejar el error si no se selecciona talla

  const addToCart = () => {

    setErrorSize(true);
    if( !size ) return;
    console.log({ size, quantity })

  }

  return (
    <>

      {
        errorSize && !size && (
            <span className="mt-2 font-bold shadow-sm text-red-500 fade-in">
                Debe de seleccionar una talla
            </span>  
        )
      }

      {/* Selector de tallas */}
      <SizeSelector
        selectedSize={ size }
        availableSizes={product.sizes}
        onSizeSelected={ setSize }
      />

      {/* Selector de cantidad */}
      <QuantitySelector 
        quantity={ quantity }
        onChangeQuantity={ setQuantity }
      />

      {/* Boton */}
      <button className="flex btn-primary my-5 w-full"
              onClick={ addToCart } >
        <span className="flex align-middle items-center text-center mx-auto">
            <IoCartOutline className="mr-1" size={25} />
            Agregar al carrito
        </span>
      </button>
    </>
  );
};

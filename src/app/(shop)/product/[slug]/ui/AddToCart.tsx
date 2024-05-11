"use client";

import { ColorSelector, QuantitySelector, SizeSelector } from "@/components";
import { IProduct, ValidColors, ValidSizes } from "@/interfaces/product.interface";
import React, { useState } from "react";
import { IoAlertCircleOutline, IoCartOutline } from "react-icons/io5";

interface IProps {
    product: IProduct
}

export const AddToCart = ({ product }: IProps) => {

  const [size, setSize] = useState<ValidSizes | undefined>(); //Una talla válida
  const [color, setColor] = useState<ValidColors | undefined>(); //Una talla válida
  const [quantity, setQuantity] = useState<number>(1); //Minimamente 1 prenda
  const [errorSize, setErrorSize] = useState<boolean>(false); //Para manejar el error si no se selecciona talla
  const [errorColor, setErrorColor] = useState<boolean>(false); //Para manejar el error si no se selecciona talla

  const addToCart = () => {

    setErrorSize(true);
    if( !size ) return;
    setErrorColor(true);
    if( !color ) return;

    console.log({ size, quantity, color })

  }

  return (
    <>
      {/* Por si no hemos seleccionado una talla */}
      {
        errorSize && !size && (
            <span className="flex mt-2 px-4 py-2 text-md font-semibold leading-none text-white bg-red-500 rounded-full fade-in">
                <IoAlertCircleOutline size={30} />
                <p className="ml-1 mt-2">Debe de seleccionar una talla para realizar la orden.</p>
            </span>  
        )
      }

      {/* Por si no hemos seleccionado un color */}
      {
        errorColor && !color && (
          <span className="flex mt-2 px-4 py-2 text-md font-semibold leading-none text-white bg-red-500 rounded-full fade-in">
              <IoAlertCircleOutline size={30} />
              <p className="ml-1 mt-2">Debe de seleccionar un color para realizar la orden.</p>
          </span> 
        )
      }

      {/* Selector de tallas */}
      <SizeSelector
        selectedSize={ size }
        availableSizes={product.sizes}
        onSizeSelected={ setSize }
      />

      {/* Selector de colores */}
      <ColorSelector
        selectedColor={ color }
        availableColors={product.colors}
        onColorSelected={ setColor }
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

"use client";

import { useState } from "react";
// import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline';

interface IProps {
    quantity: number;
    onChangeQuantity: ( quantity: number ) => void;
}

export const QuantitySelector = ({ quantity, onChangeQuantity }: IProps) => {

  const [count, setCount] = useState(quantity)

  const onQuantityChange = ( value: number ): void => {
    if( (count + value) <= 0  ) return;
    setCount( count + value );
    onChangeQuantity( count + value );
  }

  return (
    <>
      <h3 className="font-bold mb-4 text-md md:text-xl">Cantidad: </h3>

      <div className="flex -mt-2">
        <button className="m-1 p-1 rounded-md transition-all hover:bg-gray-200" onClick={ () => onQuantityChange( -1 ) }>
          <RemoveCircleOutline className="text-3xl" />
        </button>
        <span className="inline-block py-2 px-4 w-20 align-middle mt-1 mx-3 md:bg-gray-200 text-center rounded">
          { count }
        </span>
        <button className="m-1 p-1 rounded-md transition-all hover:bg-gray-200" onClick={ () => onQuantityChange( +1 ) }>
          <AddCircleOutline className="text-3xl" />
        </button>
      </div>
    </>
    
  )
}


import type { ValidSizes } from "@/interfaces/product.interface"
import clsx from "clsx";

interface IProps {
    selectedSize?: ValidSizes;
    availableSizes: ValidSizes[]; //["SX","M","XL","XXL"]
    onSizeSelected: ( size: ValidSizes ) => void;
}

export const SizeSelector = ({ selectedSize, availableSizes, onSizeSelected }: IProps) => {
  return (
    <div className="my-5">
      <h3 className="font-bold mb-4 text-md md:text-xl">Tallas Disponibles:</h3>

        <div className="flex -mt-3 -mr-2">
            {
                availableSizes.map( size => (
                    <button 
                        key={size}
                        onClick={ () => onSizeSelected(size) } 
                        className={
                            clsx(
                                "mx-1 hover:underline text-md md:text-xl rounded-md transition-all hover:bg-gray-200 p-2",
                                {
                                    "underline": size === selectedSize
                                }
                            )
                        }
                    >
                        { size }
                    </button>
                ))
            }
        </div>

    </div>
  )
}
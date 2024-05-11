
import { ValidColors } from '@/interfaces/product.interface';
import clsx from 'clsx';
import React from 'react'

interface IProps {
    selectedColor?: ValidColors;
    availableColors: ValidColors[]; //[{}, {}]
    onColorSelected: ( color: ValidColors ) => void;
}

export const ColorSelector = ({ selectedColor, availableColors, onColorSelected }: IProps) => {

  return (
    <div className="my-5">
        <h3 className="font-bold mb-4 text-md md:text-xl">Colores Disponibles:</h3>

        <div className="flex -mt-3 -mr-2">
            {

                availableColors.map( (color, index) => (
                    
                        <button 
                            key={ index }
                            title={ color.name }
                            onClick={ () => onColorSelected(color) } 
                            className={
                                clsx(
                                    
                                    `mx-1 hover:underline text-md md:text-xl rounded-md transition-all p-5`,
                                    {
                                        "underline border-4 border-blue-500": color === selectedColor
                                    }
                                )
                            }
                            style={{ backgroundColor: color.code }}
                        >
                            {/* { color.name } */}
                        </button>
                    
                ))

            }
        </div>

    </div>
  )

}



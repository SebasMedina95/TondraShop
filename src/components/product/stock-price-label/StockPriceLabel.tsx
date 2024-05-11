"use client";

import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { useEffect, useState } from "react";
import { FaBoxes, FaDollarSign } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { TbGenderTransgender } from "react-icons/tb";

//USAMOS ESTE COMPONENTE PORQUE CADA VEZ QUE QUEREMOS CARGARLO
//QUEREMOS QUE SE ACTUALICE LA INFORMACIÓN DEL STOCK Y MANTENERLO
//AL DÍA EN TODO MOMENTO.

//*RECORDEMOS QUE COMO ES UN USE CLIENT, NO PODEMOS HACER LOS LLAMADOS
//*DE USE SERVER COMO LO HACEMOS NORMALMENTE, ACÁ SI DEBEMOS USAR HOOKS
//*DE REACT PARA EL TEMA.

interface IProps {
  slug: string;
}

//SEED - Esto luego lo haremos con BD
const products = initialData.products;

export const StockPriceLabel = ({ slug }: IProps) => {

  const [stock, setStock] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true)
    
  useEffect(() => {
    getStock();
  }, [])

  const getStock = async() => {
    // const { stock, price } = await getStockAndPriceBySlug(slug);
    const product = products.find( prod => prod.slug == slug );
    
    setStock( product!.inStock );
    setPrice( product!.price );
    setType( product!.type )
    setGender( product!.gender )
    setIsLoading(false); //En este punto ya tenemos la data, detenemos la carga
  }

  return (
    <>
        {
            isLoading 
            ? 
                (

                    <div className="flex bg-gray-300 animate-pulse">
                        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
                            &nbsp;
                        </h1>
                        <p className="text-lg items-center align-middle ml-1">
                            &nbsp;
                        </p>
                    </div>

                )
            :
                (

                    <div className="mt-2">
                        <div className="flex">
                            <h1 className={`${titleFont.className} antialiased font-bold text-sm md:text-xl flex`}>
                                <FaBoxes className="mr-4 mt-1" />Stock:
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1">
                                { stock }
                            </p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <FaDollarSign className="mr-4 mt-1" /> Precio: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1">${ price }</p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <GiClothes className="mr-4 mt-1" /> Tipo: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1 capitalize">{ type }</p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <TbGenderTransgender className="mr-4 mt-1" /> Genero: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1 capitalize">{ gender }</p>
                        </div>

                    </div>

                )
        }
        
    </>
  );
};

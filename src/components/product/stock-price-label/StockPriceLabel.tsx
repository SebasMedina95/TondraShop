"use client";

import { useEffect, useState } from "react";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
// import { FaBoxes, FaDollarSign } from "react-icons/fa";
// import { GiClothes } from "react-icons/gi";
// import { TbGenderTransgender } from "react-icons/tb";

import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined';
import PriceChangeOutlined from '@mui/icons-material/PriceChangeOutlined';
import ChecklistOutlined from '@mui/icons-material/ChecklistOutlined';
import FamilyRestroomOutlined from '@mui/icons-material/FamilyRestroomOutlined';

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
                                <Inventory2Outlined className="mr-4" />
                                Stock:
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1">
                                { stock }
                            </p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <PriceChangeOutlined className="mr-4" /> 
                                Precio: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1">${ price }</p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <ChecklistOutlined className="mr-4" /> 
                                Tipo: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1 capitalize">{ type }</p>
                        </div>

                        <div className="flex">
                            <h1 className={ `${ titleFont.className } antialiased font-bold text-md md:text-xl flex` }> 
                                <FamilyRestroomOutlined className="mr-4" /> 
                                Genero: 
                            </h1>
                            <p className="text-md md:text-xl items-center align-middle ml-1 capitalize">{ gender }</p>
                        </div>

                    </div>

                )
        }
        
    </>
  );
};

"use client";

import { titleFont } from "@/config/fonts"
import { useUiStore } from "@/store/ui/ui-store";
import Link from "next/link"
// import { IoCartOutline, IoManOutline, IoSearchOutline, IoWomanOutline } from "react-icons/io5"
// import { LiaBoxOpenSolid } from "react-icons/lia";
// import { MdOutlineChildCare } from "react-icons/md";
import Man2Outlined from '@mui/icons-material/Man2Outlined';
import Woman2Outlined from '@mui/icons-material/Woman2Outlined';
import ChildCareOutlined from '@mui/icons-material/ChildCareOutlined';
import FamilyRestroomOutlined from '@mui/icons-material/FamilyRestroomOutlined';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

export const TopMenu = () => {

  const openMenu = useUiStore( state => state.openSideMenu );

  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link href="/">
            <span className={ `${ titleFont.className } antialiased font-bold` }>Tondra</span>
            <span> | Shop</span>
        </Link>
      </div>

      {/* Menu Central */}
      <div className="hidden sm:block">
        
        <div className="flex">

          <Link className="flex m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/men">
            <Man2Outlined className="mr-1" /> 
            Hombres
          </Link>

          <Link className="flex m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/women">
            <Woman2Outlined className="mr-1" />
            Mujeres
          </Link>

          <Link className="flex m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/kid">
            <ChildCareOutlined className="mr-1" />
            Niños
          </Link>

          <Link className="flex m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/gender/unisex">
            <FamilyRestroomOutlined className="mr-1" />
            Mixto
          </Link>

        </div>
        
      </div>

      {/* Buscador, Card y Menu */}
      <div className="flex items-center">

        <Link className="mx-2 hover:bg-gray-100 rounded-md transition-all" href="/search">
          <SearchOutlined className="text-2xl" />
        </Link>
        
        <Link className="mx-2 hover:bg-gray-100 rounded-md transition-all" href="/cart">
          <div className="relative">
            <span className="text-center items-center absolute text-xs rounded-full px-1 font-bold -top-2 -right-3 bg-blue-700 text-white"
                  title="Productos en el carrito">
              6
            </span>
            <ShoppingCart />
          </div>
        </Link>

        <button 
          onClick={ () => openMenu() }
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Menú
        </button>

      </div>

    </nav>
  )
}


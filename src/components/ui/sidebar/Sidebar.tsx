"use client";

import { useUiStore } from "@/store/ui/ui-store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoManOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
  IoWomanOutline,
} from "react-icons/io5";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { MdOutlineChildCare } from "react-icons/md";

export const Sidebar = () => {

  //Aplicamos el gestor de estados - Zustand
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen);
  const closeMenu = useUiStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* Colocando el Background Black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
      )}

      {/* Aplicando el Blur */}
      {isSideMenuOpen && (
        <div
          onClick={() => closeMenu()}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        />
      )}

      {/* El sidemenu */}
      <nav
        className={clsx(
          "fixed overflow-y-auto p-5 right-0 top-0 w-[250px] md:w-[450px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 rounded-md transition-all hover:bg-gray-100 cursor-pointer"
          onClick={() => closeMenu()}
        />

        {/* Input de Busqueda */}
        <div className="relative mt-14 ">
          <IoSearchOutline size={20} className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar ..."
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Opciones del Menú */}

        <Link onClick={() => closeMenu()} className="flex text-sm items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all" href="/gender/men">
            <IoManOutline size={30} />
            <span className="ml-3 text-xl">Ropa Hombres</span>
        </Link>
        <Link onClick={() => closeMenu()} className="flex text-sm items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all" href="/gender/women">
            <IoWomanOutline size={30} />
            <span className="ml-3 text-xl">Ropa Mujeres</span>
        </Link>
        <Link onClick={() => closeMenu()} className="flex text-sm items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all" href="/gender/kid">
            <MdOutlineChildCare size={30} />
            <span className="ml-3 text-xl">Ropa Niños</span>
        </Link>
        <Link onClick={() => closeMenu()} className="flex text-sm items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all" href="/gender/unisex">
            <LiaBoxOpenSolid size={30} />
            <span className="ml-3 text-xl">Ropa Mixtas</span>
        </Link>

        {/* Barra divisoria */}
        <div className="w-full h-px bg-gray-200 my-10 rounded" />

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPersonOutline size={30} />
          <span className="ml-3 text-xl">Perfil</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={30} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogOutOutline size={30} />
          <span className="ml-3 text-xl">Salir</span>
        </Link>

        {/* Barra divisoria */}
        <div className="w-full h-px bg-gray-200 my-10 rounded" />

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoShirtOutline size={30} />
          <span className="ml-3 text-xl">Productos</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoTicketOutline size={30} />
          <span className="ml-3 text-xl">Ordenes</span>
        </Link>

        <Link
          href="/"
          className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoPeopleOutline size={30} />
          <span className="ml-3 text-xl">Clientes</span>
        </Link>
      </nav>
    </div>
  );
};

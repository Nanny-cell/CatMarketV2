"use client";
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import MyImageComponent from "./MyImageComponent";
import Image from "next/image";
import Link from "next/link";

export const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className="flex md:hidden items-center h-[74px] w-full relative" >
                <div className="flex-col gap-[5px] flex items-start p-3 absolute z-20" onClick={() => setShowMenu(!showMenu)} >
                    <div className={`w-9 h-1  ${showMenu ? "rotate-45 bg-white rounded translate-y-2" : "bg-black rounded"} ease duration-150 `}></div>
                    <div className={`w-9 h-1  ${showMenu ? "hidden" : "bg-black rounded"} `}></div>
                    <div className={`w-9 h-1  ${showMenu ? "-rotate-45 bg-white rounded -translate-y-0.5" : "bg-black rounded"} ease duration-150 `}></div>
                </div>
                <div className="flex justify-end w-full pr-3">

                    <SearchInput />
                </div>
            </div>
            {/**Menu hamburguesa con efecto  */}
            <div className={`fixed bg-gray-500 w-full bg-opacity-70 h-screen z-10 
                            transition-all duration-300 ease-in-out md:hidden
                            ${showMenu ? "" : "-translate-y-full"} flex justify-center items-start`} >
                <ul className="flex flex-col justify-between items-center text-white gap-6 text-2xl pt-24">
                    <li className="font-semibold" onClick={() => setShowMenu(!showMenu)}>
                        <Link href="/products">Ofertas </Link>
                    </li>
                    <li className="font-semibold" onClick={() => setShowMenu(!showMenu)}>
                        <Link href="/productos">Carrito </Link>
                    </li>
                    <li className="font-semibold" onClick={() => console.log("iniciar sesion burguer")}>
                        Inicar Sesion
                    </li>
                </ul>
            </div>
        </>
    );
};
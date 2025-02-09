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
                    <div className={`w-9 h-1 bg-black rounded ${showMenu ? "rotate-45 translate-y-2" : ""} ease duration-150 `}></div>
                    <div className={`w-9 h-1 bg-black rounded ${showMenu ? "hidden" : ""} `}></div>
                    <div className={`w-9 h-1 bg-black rounded ${showMenu ? "-rotate-45 -translate-y-0.5" : ""} ease duration-150 `}></div>
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
                    <li className="font-semibold">
                        <Link href="/">Ofertas </Link>
                    </li>
                    <li className="font-semibold">
                        <Link href="/">Carrito </Link>
                    </li>
                    <li className="font-semibold">
                        <Link href="/">Inicar Sesion </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};
"use client";
import { useState } from "react";
import { SearchInput } from "./SearchInput";

export const BurgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <div className="flex md:hidden items-center h-[74px] w-full" >
            <div className="flex-col gap-[5px] flex items-start p-3" onClick={() => setShowMenu(!showMenu)} >
                <div className={`w-9 h-1 bg-black rounded ${showMenu ? "rotate-45 translate-y-2" : ""} ease duration-150 `}></div>
                <div className={`w-9 h-1 bg-black rounded ${showMenu ? "hidden" : ""} `}></div>
                <div className={`w-9 h-1 bg-black rounded ${showMenu ? "-rotate-45 -translate-y-0.5" : ""} ease duration-150 `}></div>
            </div>
            <div className="flex justify-center w-full">

                <SearchInput />
            </div>
        </div>
    );
};
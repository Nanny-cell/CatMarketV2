"use client"
import Image from "next/image";
import MyImageComponent from "./MyImageComponent";
import { BurgerMenu } from "./BurgerMenu";
import { SearchInput } from "./SearchInput";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav className="h-auto w-full hidden md:block">
        <ul className="flex justify-between items-center">
          <li>
            <Image
              src={"/IconoCatMarket.png"}
              width={100}
              height={100}
              alt="Logo CatMarket"
            />
          </li>
          <li className="text-2xl italic font-thin">CatMarket</li>
          <li>
            <SearchInput />
          </li>
          <li className="font-semibold">
            <Link href="/products">Ofertas </Link>
          </li>
          <li className="font-semibold">
            <Link href="/ruta">Carrito </Link>
          </li>
          <li className="font-semibold" onClick={() => console.log("iniciar sesion")}>
            Iniciar <br /> sesion
          </li>
          <li className="w-14 h-10">
            <MyImageComponent source={"/IconoLogin.svg"} />
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </>
  );
};
import Image from "next/image"
import MyImageComponent from "./MyImageComponent"

export const Navbar = () => {
  return (
    <nav className="h-auto" >
      <ul className="flex justify-between items-center">
        <li>
          <Image
            src={'/IconoCatMarket.png'}
            width={100}
            height={100}
            alt="Logo CatMarket"
          />
        </li>
        <li className="text-2xl italic font-thin">CatMarket</li >
        <li className="relative">
          <div className="w-5 h-5 absolute top-2 left-2">
            <MyImageComponent source={'/Lupa.png'} />
          </div>
          <input type="search"
            placeholder="Search"
            className="py-2 pl-9 pr-2 rounded-lg outline-none bg-gray-200"
          />
        </li>
        <li className="font-semibold">Ofertas</li>
        <li className="font-semibold">Carrito</li>
        <li className="font-semibold">Iniciar <br /> sesion</li>
        <li className="w-14 h-10"><MyImageComponent source={'/IconoLogin.svg'} /></li>
      </ul>
    </nav>
  )
}
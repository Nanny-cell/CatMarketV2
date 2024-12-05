import Image from "next/image"

export const Navbar = () => {
    return( 
        <nav className= " h-auto" >
          <ul className="flex justify-between items-center" >
            <li>
              <Image 
                src={'/IconoCatMarket.png'}
                width={100} 
                height={100} 
                alt="Logo CatMarket"  
              />
            </li>
            <li>CatMarket</li >
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
          </ul>
        </nav>
    )
}
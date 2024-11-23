import Image from "next/image"

export const Navbar = () => {
    return( 
        <nav>
          <ul className="flex justify-around" >
            <li>
              <Image 
                src={'/IconoCatMarket.png'}
                width={100} 
                height={100} 
                alt="Logo CatMarket"  
              />
            </li>
            <li>CatMarket</li>
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
            <li>CAT</li>
          </ul>
        </nav>
    )
}
import Image from "next/image"

export const Categories = () => {
    return (
        <div className="flex justify-between gap-4">
            <div className="cursor-pointer" >
                <Image
                    src="/IconoLimpieza.svg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    
                />
                <p className="flex justify-center">Limpieza</p>
            </div>
            <div className="cursor-pointer" >
                <Image
                    src="/IconoAlcohol.svg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    
                />
                <p className="flex justify-center">Alcohol</p>
            </div>
            <div className="cursor-pointer" >
                <Image
                    src="/IconoFrutaVerdura.svg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    
                />
                <p className="flex justify-center">Fruta y Verdura</p>
            </div>
            <div className="cursor-pointer" >
                <Image
                    src="/IconoBebe.svg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    
                />
                <p className="flex justify-center">Bebe</p>
            </div>
            <div className="cursor-pointer" >
                <Image
                    src="/IconoCarne.svg"
                    alt="Next.js Logo"
                    width={300}
                    height={300}
                    
                />
                <p className="flex justify-center">Carne</p>
            </div>
        </div>
    )
}
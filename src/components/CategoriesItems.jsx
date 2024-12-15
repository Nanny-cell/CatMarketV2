import Image from "next/image"

export const CategoriesItem = ({ source, name }) => {
    return (
        <div className="flex flex-col items-center gap-1 cursor-pointer">
            <div className="relative w-10 h-10 sm:w-20 sm:h-20 lg:w-40 lg:h-40 md:w-32 md:h-32">
                <Image
                    src={source}
                    alt="Next.js Logo"
                    fill
                />
            </div>
            <p className="text-center">{name}</p>
        </div>
    )
}
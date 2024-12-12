import Image from "next/image"

export const CategoriesItem = ({ source, name }) => {
    return (
        <div className="cursor-pointer w-2/12" >
            <Image
                src={source}
                alt="Next.js Logo"
                width={300}
                height={300}

            />
            <p className="flex justify-center">{name}</p>
        </div>
    )
}
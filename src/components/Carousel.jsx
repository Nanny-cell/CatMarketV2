import Image from "next/image";

export const Carousel = () => {
    return (
        <div className="relative h-[300px] bg-black flex items-center justify-center">
            <Image
                src="/gato.webp"
                alt="Next.js Logo"
                fill
                className="object-cover opacity-35"
            />
            <h2 className="text-3xl">Cat Market</h2>
            <div className="w-32 h-[20px] flex justify-evenly items-center  absolute bottom-2 left-[50%] translate-x-[-50%]">
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
            </div>
        </div>
    );
}
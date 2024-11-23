import Image from "next/image";

export const Carousel = () => {
    return (
        <div className="relative h-[300px] bg-slate-200">
            <Image
                src="/gato.webp"
                alt="Next.js Logo"
                fill
                priority
                className="object-cover"
            />
            <div className="w-[300px] h-[20px] bg-black ">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
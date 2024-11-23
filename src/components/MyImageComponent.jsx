import Image from "next/image";

export default function MyImageComponent() {
  return (
    <div className="relative w-full h-[300px]">
      <Image
        src="/path/to/image.jpg"
        alt="Descripción de la imagen"
        fill
        className="object-cover"
      />
    </div>
  );
}
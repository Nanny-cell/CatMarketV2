import Image from "next/image";

export default function MyImageComponent({ source, smw, smh, lgw, lgh, mdw, mdh, alt, h, w }) {
  return (
    <div className="relative w-full sm:h-full h-[180px]">
      <Image
        src={source}
        alt="Descripción de la imagen"
        fill
      />
    </div>
  );
}
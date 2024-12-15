import Image from "next/image"
import { CategoriesItem } from "./CategoriesItems"

export const Categories = () => {
    const categories = ["Limpieza", "Alcohol", "Fruta y Verduras", "Bebe", "Carne"];

    return (
        <div className="flex justify-between gap-4">
            <CategoriesItem source='/IconoLimpieza.png' name='Limpieza' />
            <CategoriesItem source='/IconoAlcohol.png' name='Alcohol' />
            <CategoriesItem source='/IconoFrutaVerdura.png' name='Fruta y Verdura' />
            <CategoriesItem source='/IconoBebe.png' name='Bebe' />
            <CategoriesItem source='/IconoCarne.png' name='Carne' />
        </div>
    )
}
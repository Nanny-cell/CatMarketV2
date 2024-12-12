import Image from "next/image"
import { CategoriesItem } from "./CategoriesItems"

export const Categories = () => {
    const categories = ["Limpieza", "Alcohol", "Fruta y Verduras", "Bebe", "Carne"];

    return (
        <div className="flex justify-between gap-4">
            <CategoriesItem source='/IconoLimpieza.svg' name='Limpieza' />
            <CategoriesItem source='/IconoAlcohol.svg' name='Alcohol' />
            <CategoriesItem source='/IconoFrutaVerdura.svg' name='Fruta y Verdura' />
            <CategoriesItem source='/IconoBebe.svg' name='Bebe' />
            <CategoriesItem source='/IconoCarne.svg' name='Carne' />
        </div>
    )
}
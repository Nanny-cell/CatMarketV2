import { CategoriesItem } from "./CategoriesItems"

export const Categories = () => {

    const categories = [
        {
            source: '/IconoLimpieza.png',
            name: 'Limpieza'
        },
        {
            source: '/IconoAlcohol.png',
            name: 'Alcohol'
        },
        {
            source: '/IconoFrutaVerdura.png',
            name: 'Fruta y Verdura'
        },
        {
            source: '/IconoBebe.png',
            name: 'Bebe'
        },
        {
            source: '/IconoCarne.png',
            name: 'Carne'
        },
    ];

    return (
        <div className="flex justify-between gap-4">
            {categories.map((category, index) =>
                <CategoriesItem
                    key={index}
                    source={category.source}
                    name={category.name}
                />)}
        </div>
    )
}
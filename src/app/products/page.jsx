import { CardItem } from "@/components/CardItem";

export default function Products() {
    return (
        <main className="flex w-full mt-4">
            <aside className=" w-1/6 h-screen p-2" > {/** <aside> se utiliza para los menus laterales */}
                <h3 className="text-xl font-semibold ">Marca</h3>
            </aside>
            <section className="w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 place-items-center content-start">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => <CardItem key={item} />)}

            </section>
        </main>
    )
}

import MyImageComponent from "./MyImageComponent"

export const Sales = () => {
    return (
        <div className="flex flex-col sm:flex-row w-full min-h-[380px] gap-3 py-4">
            <div className="w-full">
                <MyImageComponent source={"/congelados.png"} />
            </div>
            <div className="flex flex-col w-full gap-3">
                <MyImageComponent source={"/mascotas.png"} />
                <MyImageComponent source={"/herramientas.png"} h={20} />
            </div>
        </div>
    )
}

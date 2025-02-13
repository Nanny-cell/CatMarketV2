import Image from 'next/image'
import React from 'react'

export const CardItem = () => {
    return (
        <div className="w-56 h-60 bg-white rounded-lg shadow-lg m-4 flex flex-col justify-between p-2 ">
            <div className="flex flex-col items-center justify-start">
                <Image
                    src="/IconoCatMarket.png"
                    width={250}
                    height={200}
                    alt="Logo cartMarket "
                />
                <h5 className="self-start font-semibold">Nombre</h5>
            </div>
            <div className="flex justify-between px-2">
                <button className="bg-red-500 rounded text-white font-semibold p-1 " >Agregar</button>
                <span className="text-sm self-end text-red-500 font-semibold">$6.595</span>
            </div>
        </div>
    )
}

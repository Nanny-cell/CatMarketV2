import Image from 'next/image'

export function SearchInput() {
    return (
        <div className='relative'>
            <div className="w-5 h-5 absolute top-2 left-2">
                <div className='w-5 h-5 relative'>
                    <Image src={"/Lupa.png"} alt="Search" fill />
                </div>
            </div>
            <input
                type="search"
                placeholder="Search"
                className="py-2 pl-9 pr-2 rounded-lg outline-none bg-gray-200"
            />
        </div>
    )
}

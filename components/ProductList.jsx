import React from 'react'
import CardProduct from './CardProduct'
import CardJenis from './CardJenis'
export default function ProductList() {
    return (
        <div className='w-full h-full bg-primary'>
            <div className='flex justify-start items-center pb-10'>
            <h1 className='text-left  h=[50px] sm:h-[125px] shadow-xl shadow-black pl-5 sm:pr-10 py-5  text-2xl sm:text-4xl md:text-6xl right-0 max-w-[50%] w-[50%] bg-primary'>
                    PRODUCT
                </h1>
            </div>
            <div className='px-10'>
                <div className='bg-secondary shadow-sm shadow-black'>
                    <h1 className='text-primary p-5 text-3xl'>BLUEMOON</h1>
                </div>
                <div class="overflow-x-scroll flex flex-row justify-start items-center">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    
                </div>
            </div>

        </div>
    )
}

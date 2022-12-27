import React from 'react'

function CardJenis(props) {
    return (
        <div className='hover:bg-primary group transition ease-in-out delay-150 m-5 flex justify-center items-center flex-col sm:block shadow-lg shadow-black p-5 relative px-5 py-5  w-[400px] h-[450px]  sm:h-[400px]'>
            <h1 className='text-4xl group-hover:text-secondary parent-h text-primary opacity-6'>{props.title}</h1>
            <div className='w-full h-1 bg-primary group-hover:bg-secondary my-6'></div>
            <p className='text-third text-center sm:text-left group-hover:text-secondary text-lg sm:pr-24'>{props.list}</p>
            <div className='rounded-full w-[180px] h-[180px] bg-primary hidden group-hover:bg-secondary sm:flex  shadow-lg shadow-black justify-center items-center absolute bottom-[30%] right-[-25%]'>
                <img className='object-fill' src={props.src} alt="" />
            </div>
            <div className='rounded-full w-[280px] m-5 h-[200px] min-h-[200px] group-hover:bg-secondary bg-primary md:hidden flex  shadow-lg shadow-black justify-center items-center'>
                <img className='object-fill' src={props.src} alt="" />
            </div>
        </div>
    )
}

export default CardJenis
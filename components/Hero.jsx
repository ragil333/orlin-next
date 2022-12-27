import React from 'react'
import { Carousel } from 'antd';
import Typewriter from 'typewriter-effect';



export default function Hero() {
    return (
        <div className='max-h-[900px] w-full overflow-hidden relative'>
            <img className='object-fill w-full h-full top-0 left-0 ' src="assets/bg.png" alt="" />
            <div className='grid px-10 grid-cols-1 sm:grid-cols-2 w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <div className='flex flex-col justify-center items-center sm:items-start'>
                    <h1 className='text-third font-bold text-2xl xl:text-7xl tracking-widest text-center sm:text-left'>
                        <Typewriter
                            options={{
                                strings: ['ORLIN EXHAUST'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <div className='h-2 my-3 w-full bg-primary'></div>
                    <p className='text-md text-center sm:text-left sm:text-lg xl:text-2xl text-third'>Sebagai representatif Kota Purbalingga di bidang otomotif.</p>
                </div>
                <div className='hidden sm:block'>
                    <Carousel autoplay >
                        <div className='flex justify-center items-center '>
                            <img className='m-auto h-[600px]' src="assets/nalpot.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center '>
                            <img className='m-auto h-[600px]' src="assets/nalpot2.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center '>
                            <img className='m-auto h-[600px]' src="assets/nalpot3.png" alt="" />
                        </div>
                        <div className='flex justify-center items-center '>
                            <img className='m-auto h-[600px]' src="assets/nalpot4.png" alt="" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

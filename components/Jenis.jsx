import React from 'react'
import CardJenis from './CardJenis'
export default function Jenis() {
    return (
        <div className='bg-secondary'>
            <div className='flex justify-end items-center pb-10'>
                <h1 className='text-right  h=[50px] sm:h-[125px] shadow-xl shadow-black pr-5 sm:pr-10 py-5 sm:pr-10 text-2xl sm:text-4xl md:text-6xl right-0 max-w-[50%] w-[50%] bg-primary'>
                    JENIS MOTOR
                </h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3  place-items-center'>
                <div>
                    <CardJenis
                        title='MATIC'
                        list='Beat, Mio, Vario, Scoopy, Fino, Genio, Aerox, Nmax, XMax, PCX, ADV, Lexi, DLL.'
                        src='assets/matic.png'
                    />
                </div>
                <div>
                    <CardJenis
                        title='VESPA'
                        list='Sprint, Primavera, DLL.'
                        src='assets/vespa.png'
                    />
                </div>
                <div>
                    <CardJenis
                        title='2 TAK'
                        list='R, RR, SS, Yamaha Touch, DLL.'
                        src='assets/2-tak.png'
                    />
                </div>
                <div>
                    <CardJenis
                        title='BEBEKAN'
                        list='Supra, Vega R, Revo, Jupiter, Astrea, Smash, Blade, DLL.'
                        src='assets/bebekan.png'
                    />
                </div>
                <div>
                     <CardJenis
                        title='MOTOCROSS'
                        list='SWR 155, KLX, CRF, KX, D-Tracker, DLL.'
                        src='assets/motocross.png'
                    />
                </div>
                <div>
                     <CardJenis
                        title='<250cc'
                        list='Vixion, Satria FU, CBR 150, CB150 Verza, CB150X, CBR 250, GSX R, R25, Sonic, R15 V1/V2/V3/V4, Jupiter MX, MX King, Ninja 250, Ninja ZX-25R, Ninja 250SL DLL.'
                        src='assets/250cc.png'
                    />
                </div>
                <div>
                     <CardJenis
                        title='>500cc'
                        list='CBR 600 RR, CBR 1000 RR-R, Ninja ZX10-R, Ninja ZX-6R, Yamaha R6, Yamaha R1M, Ninja H2, DLL.'
                        src='assets/500cc.png'
                    />
                </div>
            </div>

        </div>
    )
}

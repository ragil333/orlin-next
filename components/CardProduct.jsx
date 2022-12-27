import React from 'react'

function CardProduct() {
  return (
    <div className='relative m-5 bg-secondary shadow-lg shadow-black min-w-[450px]' >
        <img className='w-[300px] m-5' src="assets/nalpot.png" alt="" />
        <h1 className='m-4 p-4 text-center text-xl shadow-lg shadow-black bg-primary w-[50%] absolute bottom-[-5%] left-[22%]'>Silincer Keong</h1>
    </div>
  )
}

export default CardProduct
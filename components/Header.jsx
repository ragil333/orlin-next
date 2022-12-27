import React from 'react'
import { motion } from "framer-motion-3d"

function Header() {
  return (
    <div>
      <header className='px-10 h-30 bg-primary shadow-black shadow-lg py-5 flex flex-col sm:flex-row justify-between items-center'>
        <div>
          <img className='w-[200px] pb-2 xl:w-[400px]' src="assets/brand.png" alt="" />
        </div>
        <div className='sm:flex hidden justify-between items-center'>
          <div className='py-5'>
            <a className="m-5 xl:text-2xl font-bold text-xl hover:bg-secondary hover:text-white p-3 transition ease-in cursor-pointer hover:shadow-xl hover:drop-shadow-xl delay-100 ">Home</a>
            <a className="m-5 xl:text-2xl font-bold text-xl hover:bg-secondary hover:text-white p-3 transition ease-in cursor-pointer hover:shadow-xl hover:drop-shadow-xl delay-100">Product</a>
            <a className="m-5 xl:text-2xl font-bold text-xl hover:bg-secondary hover:text-white p-3 transition ease-in cursor-pointer hover:shadow-xl hover:drop-shadow-xl delay-100">About</a>
            <a className="m-5 xl:text-2xl font-bold text-xl hover:bg-secondary hover:text-white p-3 transition ease-in cursor-pointer hover:shadow-xl hover:drop-shadow-xl delay-100">Contact</a>
          </div>
        </div>
      </header>
    </div>
  )
}
export default Header
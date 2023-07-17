import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';
AiOutlineShoppingCart

const Navbar = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-start justify-center items-center my-2 shadow-md'>
      <div className='logo mx-5'>
        <Image src={"/assets/images/dhub-logo.png"}
          alt=""
          width={150}
          height={80}
        ></Image>

      </div>
      <div className='nav'>
        <ul className='flex items-center space-x-2 font-bold md:text-xl'>
          <Link href={'/tshirt'} ><li>T-Shirts</li></Link>
          <Link href={'/hoodies'} ><li>Hoodies</li></Link>
          <Link href={'/stickers'} ><li>Stickers</li></Link>
          <Link href={'/mugs'} ><li>Mugs</li></Link >
        </ul >
      </div >
  <div className='cart absolute right-0 top-2 mx-5'>
    <AiOutlineShoppingCart className='text-2xl md:text-3xl'/>
  </div>
      
      

    </div >
  )
}

export default Navbar;
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  AiOutlineCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md"; 
import { BsFillBagFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
        <div className="logo mx-5">
          <Link href={"/"}>
            <Image
              src={"/assets/images/dhub-logo.png"}
              alt=""
              width={150}
              height={80}
            ></Image>
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-sm">
            <Link href={"/tshirts"}>
              <li>T-Shirts</li>
            </Link>
            <Link href={"/hoodies"}>
              <li>Hoodies</li>
            </Link>
            <Link href={"/stickers"}>
              <li>Stickers</li>
            </Link>
            <Link href={"/mugs"}>
              <li>Mugs</li>
            </Link>
          </ul>
        </div>

        <div
          
          className="cursor-pointer cart absolute right-0 top-4 mx-5 flex"
        >
          <Link href={'/login'}><MdAccountCircle className="text-xl md:text-2xl mx-2"  />
          </Link>
          <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-2xl" />
        </div>
        <div
          ref={ref}
          className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-pink-100 px-4 py-10 transform transition-transform ${Object.keys(cart).length!==0?'translate-x-0': 'translate-x-full'} translate-x-full`}
        >
          <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
          <span
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-rose-500"
          >
            <AiOutlineCloseCircle />
          </span>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-normal text-gray-500 ">
                Your Cart is Empty!
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            cart[k].itemCode,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-rose-500"
                      />
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            cart[k].itemCode,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-rose-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="total my-2 font-bold">SubTotal:{subTotal}</div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mr-2 w-32 h-12  text-white bg-rose-500 border-0 py-2 px-2 focus:outline-none hover:bg-rose-600 rounded text-lg font-bold">
                {" "}
                <BsFillBagFill className="m-1" />
                CheckOut
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mr-1 w-36 h-12 space-x-5 text-white bg-rose-500 border-0 py-2 px-2 focus:outline-none hover:bg-rose-600 rounded text-lg font-bold"
            >
              {" "}
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

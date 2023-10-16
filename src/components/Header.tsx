'use client'
import React, { useState } from "react";
import Logo from "@/img/logo.png";
import Image from "next/image";
import { navlink } from "@/constant/data";
import Link from "next/link";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

function Header() {
  const [show , setShow]=useState(false);
  const routname = usePathname()
  console.log(routname);
  
  return (
    <main className="sticky top-0 z-10">
      <nav className="w-full h-16 bg-backgroundColor relative">
        <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between">
          {/* navbar logo */}
          <div>
            <Link href={'/'}>
            <Image src={Logo} alt="logo image" className="w-24"></Image>
            </Link>
          </div>
          {/* navbar item */}
          <ul className="hidden md:flex gap-5 font-semibold text-gray-600 uppercase">
            {navlink.map((i) => (
              <Link key={i.titel} href={i.link} target={i?.target}>
                <li
                  className={`text-md hover:text-black cursor-pointer duration-300 relative group overflow-hidden ${routname === i.link && "text-black"}`}
                >
                  {i.titel}
                  <span className={`h-[1px] w-full bg-black inline-flex absolute -translate-x-[100%] left-0 bottom-0 group-hover:translate-x-0 duration-200 ${routname === i.link && "translate-x-0"}`}></span>
                </li>
              </Link>
            ))}
          </ul>
          {/* smole device menu icon */}

          <div className="inline-block md:hidden"
          onClick={()=>(setShow(!show))}>
              <span  className="text-2xl">
                {
                  show ? <AiOutlineClose/> : <AiOutlineMenu/>
                }
              </span>
          </div>
          {
            show && (
              <motion.ul 
              initial={{x:40,opacity:0}}
              animate={{x:0,opacity:1}}
              transition={{duration:.5}}
              className="flex flex-col absolute right-0 top-16 py-5 px-5 bg-black gap-5 font-semibold text-gray-300 uppercase">
            {navlink.map((i) => (
              <Link key={i.titel} href={i.link}>
                <li
                  className=" relative text-md hover:text-white cursor-pointer duration-300 group overflow-hidden"
                >
                  {i.titel}
                  <span className="h-[1px] w-full bg-white inline-flex absolute -translate-x-[100%] left-0 bottom-0 group-hover:translate-x-0 duration-200 "></span>
                </li>
              </Link>
            ))}
          </motion.ul>
            )
          }
        </div>
      </nav>
    </main>
  );
}

export default Header;

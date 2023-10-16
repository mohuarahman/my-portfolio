'use client'
import React from "react";
import Logo from "@/img/logowhite.png";
import Image from "next/image";
import Link from "next/link";
import {BsFacebook,BsYoutube,BsLinkedin,BsTwitter,BsInstagram} from 'react-icons/bs'
import { navlink,footersupert } from "@/constant/data";
import {motion} from 'framer-motion'
function Footer() {
  return (
    <main>
      <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-full bg-zinc-900 text-white">
        <div className="w-full py-10 px-6 max-w-screen-xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3  lg:grid-cols-4 ">
          {/* footer 1st section */}
          <div className="my-auto">
            <Image src={Logo} alt="logo image" className="w-36 mb-3"></Image>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              architecto nobis dolorem veritatis, velit repellat?
            </p>
          </div>
          {/* footer 2nd section */}
          <div>
          <h2 className="text-2xl text-yellow-300 underline pb-8">Our menu</h2>
            <ul className="flex flex-col items-start gap-5 font-semibold text-white uppercase">
              {navlink.map((i) => (
                <Link key={i.titel} href={i.link}>
                  <li
                    key={i.titel}
                    className=" text-md hover:text-gray-300 cursor-pointer duration-300 relative group overflow-hidden"
                  >
                    {i.titel}
                    <span className="h-[1px] w-full bg-gray-300 inline-flex absolute -translate-x-[100%] left-0 bottom-0 group-hover:translate-x-0 duration-200 "></span>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          {/* footer 3rd section */}
          <div className="">
            <h2 className="text-2xl text-yellow-300 underline pb-8">Our supert</h2>
            <ul className="flex flex-col items-start gap-5 font-semibold text-white uppercase">
              {footersupert.map((i) => (
                  <li
                    key={i.titel}
                    className=" text-md hover:text-gray-300 cursor-pointer duration-300 relative group overflow-hidden"
                  >
                    {i.titel}
                    <span className="h-[1px] w-full bg-gray-300 inline-flex absolute -translate-x-[100%] left-0 bottom-0 group-hover:translate-x-0 duration-200 "></span>
                  </li>
              ))}
            </ul>
          </div>
          {/* footer 4th section */}
          <div className="my-auto">
            <p className="mb-5">Rech me with</p>
            <div className="flex gap-3">
            <a href=""><p className="text-2xl"><BsFacebook/></p></a>
            <a href=""><p className="text-2xl"><BsYoutube/></p></a>
            <a href=""><p className="text-2xl"><BsLinkedin/></p></a>
            <a href=""><p className="text-2xl"><BsTwitter/></p></a>
            <a href=""><p className="text-2xl"><BsInstagram/></p></a>
            </div>
            
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Footer;

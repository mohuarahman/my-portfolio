"use client";
import Link from "next/link";
import banner from "@/img/banner.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
function Banner() {
  return (
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-screen-xl mx-auto mx-4 my-20">
        {/* banner left */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-auto px-4"
        >
          <h1 className="text-4xl font-semibold  tracking-widest mt-10 mb-3 animate-bounce">
            MOHUA RAHMAN
          </h1>
          <h2 className="text-2xl  mb-8 font-semibold text-sky-800">
            <span className="me-2 font-normal text-gray-800">I am a </span>
            {/* <span className="font-semibold text-sky-600">
              MERN Stack Developer
            </span> */}
             <Typewriter
            words={['MERN Stack Developer', 'Web Desginer','Web Devloper','UI Disginer','Content Writr','Mobile App Devloper']}
            loop={99999}
            cursor
            cursorStyle='|'
            typeSpeed={80}
            deleteSpeed={80}
            delaySpeed={3000}
            cursorBlinking={true}
            cursorColor="red"
            // onLoopDone={handleDone}
            // onType={handleType}
          />
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            ex nobis impedit quibusdam similique est beatae nostrum, totam esse
            libero ea, obcaecati inventore molestias repellat reiciendis tempora
            facilis unde veniam?
          </p>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic
            tempora deserunt neque eveniet aperiam eos omnis nulla, nihil sint
            quod earum, facere cumque veritatis voluptatibus quasi consectetur!
            Repellat, esse!
          </p>
          <Link
            href={"/resume"}
            className="px-10 py-3 bg-gray-800 text-white rounded-lg"
          >
            Hire Me
          </Link>
        </motion.div>
        {/* baner right */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className=""
        >
          <Image src={banner} alt="banner image" className="w-[50%] mx-auto" />
        </motion.div>
      </div>
    </main>
  );
}

export default Banner;

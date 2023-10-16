'use client'
import React from 'react'
import {motion} from 'framer-motion'
function About() {
  return (
    <main>
      <motion.div
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:.5}}
      viewport={{once:true}}
      className='bg-zinc-800 text-white px-5 py-14 my-14'>
        <h1 className='text-2xl font-semibold mb-3'>About Me</h1>
        <p className='mb-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum aliquid odio sequi soluta? Laboriosam ducimus quidem aut eius saepe. Eaque earum impedit ullam quibusdam reiciendis itaque minima ipsum. Animi vitae quae.</p>
        <p>minima odit aperiam ratione magni dicta praesentium accusantium sapiente ipsam dolorum vel deleniti corporis voluptate quidem eum, sed consequuntur expedita, beatae reprehenderit, dolorem molestiae sint! Aliquam ipsam maxime inventore nostrum numquam natus non distinctio ut minus in illo, autem accusantium, quae facilis hic odit minima exercitationem placeat recusandae omnis.</p>
      </motion.div>
      <hr/>
    </main>
  )
}

export default About
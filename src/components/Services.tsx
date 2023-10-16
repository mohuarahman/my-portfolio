'use client'
import React from 'react'
import {services} from '@/constant/data'
import {motion} from 'framer-motion'
function Services() {
  return (
    <main className='my-20'>
      <motion.div
      initial={{y:100,opacity:0}}
      whileInView={{y:0,opacity:1}}
      transition={{duration:0.5}}
      viewport={{once:true}}

      className=''>
        <h1 className='text-2xl mb-10'>My Servicer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            services.map((i)=>(
              <div key={i.id} className="border-[1px] border-slate-900 max-w-[400px] mx-auto rounded-lg px-5 py-10">
            <div className='flex gap-2'>
              <h2>{i.titel}</h2>
              <span className='text-sky-600 animate-bounce text-2xl'>{<i.icon/>}</span>
            </div>
            <p>{i.description}</p>
          </div>
            ))
          }
        </div>
      </motion.div>
     
    </main>
  )
}

export default Services
'use client'
import {protfolio} from '@/constant/data'
import Image from 'next/image'
import {motion} from 'framer-motion'
import React from 'react'
function Protfolio() {
  return (
    <main className='my-20'>
      <div
      className=''>
        <h1 className='text-2xl mb-10'>Protfolio</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {/* item-1 */}
         {
          protfolio.map((i)=>(
            <motion.div
              initial={{y:100,opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:.5}}
              viewport={{once:true}}
              key={i.id}
              className="transition-all border-[1px] group border-slate-900  mx-auto rounded-lg px-5 py-10">
          <Image src={i.img} alt='protfolio image' className='w-full'/>
          <h1 className='text-2xl font font-semibold group-hover:text-blue-800 mt-4 capitalize'>{i.name}</h1>
          <p className='text-gray-600 text-sm'>{i.language}</p>
         </motion.div>
          ))
         }
        </div>
      </div>
    </main>
  )
}

export default Protfolio
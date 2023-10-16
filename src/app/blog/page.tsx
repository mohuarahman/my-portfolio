import About from '@/components/About'
import Banner from '@/components/Banner'
import React from 'react'

function page() {
  return (
    <main className='max-w-screen-xl px-4 mx-auto'>
      <Banner/>
      <About/>
    </main>
  )
}

export default page
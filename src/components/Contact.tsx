import React from 'react'

function Contact() {
  const inoutStyele = ' border-2 border-gray-700 h-10 rounded-md ps-2'
  return ( 
    <main>
      <form className='flex flex-col gap-y-4 my-20 min-w-[250px] max-w-[500px] mx-auto'>
        <input type="text" placeholder='Your Name' className={inoutStyele} />
        <input type="text" placeholder='Company Name (optional)'  className={inoutStyele} />
        <input type="email" placeholder='Your Email'  className={inoutStyele}/>
        <input type="text" placeholder='Your Masseg'  className={inoutStyele}/>
        <div className='flex justify-between lg:justify-evenly mt-8'>
        <button type='submit' className='border-2 border-gray-300 w-32 py-2 text-xl bg-gray-900 text-white rounded-lg'>Knock Me</button>
        <button type='reset' className='border-2 border-gray-300 w-32 py-2 text-xl bg-red-600 text-white rounded-lg'>Reset</button>
        </div>
      </form>
    </main>
  )
}

export default Contact
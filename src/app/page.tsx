import About from '@/components/About'
import Banner from '@/components/Banner'

import Protfolio from '@/components/Protfolio'
import Services from '@/components/Services'


export default function Home() {
  return (
    <main>
      <Banner/>
      <div className='max-w-screen-xl px-4 mx-auto'>
        <About/>
        <Services/>
        <Protfolio/>
        
      </div>
    </main>
  )
}

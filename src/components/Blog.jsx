import React from 'react'
import Service from './Service'
import Footer from './Footer'

function Blog() {
  return (
    <section>
      <div className='blogDiv w-full h-[60vh] flex justify-left items-center'>
        <div>
          <h1 className='text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40'>Blo<span className='text-blue-500'>g</span></h1>
        </div>
      </div>
      <Service />
      <div className='p-4'> </div>
      <Footer />
    </section>
  )
}

export default Blog
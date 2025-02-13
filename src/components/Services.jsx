import React from 'react'
import Service from './Service'
import Footer from './Footer'

export const Services = () => {
    return (
        <section>
            <div className='blogDiv w-full h-[60vh] flex justify-left items-center'>
                <div>
                    <h1 className='text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40'>Serv<span className='text-blue-500'>ices</span></h1>
                </div>
            </div>
            <Service />
            <div className='p-4'> </div>
            <Footer />
        </section>
    )
}

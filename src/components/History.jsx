import React from 'react'
import Footer from './Footer';
function History() {
  const timelineItems = [
    {
      id: 1,
      position: "right",
      title: "Highway & Structural Design",
      description: "Innovative and efficient infrastructure solutions for roads, bridges, and transportation networks.",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 2,
      position: "left",
      title: "Building Design & Safety Engineering",
      description: "Ensuring robust, sustainable, and safe architectural designs that meet Indian standards.",
      color: "bg-red-400",
      textColor: "text-white",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 3,
      position: "right",
      title: "Proof Checking & Quantity Estimation ",
      description: "Precise evaluation and verification of engineering designs and material requirements.",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 4,
      position: "left",
      title: "Surveying & Earthwork Optimization ",
      description: "Advanced techniques for land assessment and cost-effective resource utilization.",
      color: "bg-red-400",
      textColor: "text-white",
      img : "/images/blog.jpg",
      date : 2002,
    },
    {
      id: 5,
      position: "right",
      title: "Project Management & Construction Supervision ",
      description: "End-to-end oversight to ensure project efficiency, timely execution, and quality control.",
      color: "bgColor1",
      textColor: "text-gray-800",
      img : "/images/blog.jpg",
      date : 2002,
    
    },
    {
      id: 6,
      position: "left",
      title: "Training & Consultation",
      description: "Empowering engineers and professionals with specialized knowledge in civil engineering and project execution",
      color: "bg-red-400",
      textColor: "text-white",
      img : "/images/blog.jpg",
      date : 2002,
    },
  ];
  return (
    <>
       <section className="w-full flex justify-center items-center">
        <div className="aboutDiv w-full h-[60vh] flex justify-left items-center">
          <div>
            <h1 className="text-white text-6xl lg:text-[10rem] font-bold ml-8 md:ml-16 mt-40">
              HISTO<span className="text-blue-500">RY </span>
            </h1>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto p-6">
                    <h1 className="text-4xl font-bold text-gray-700 mb-6">History</h1>
                    <p className="mb-4">
                    From Vision to Excellence
Design Line Consultancy Services Private Limited (DLCSPL) is a testament to dedication, innovation, and engineering excellence. Our journey began in 2017 in Gurugram, Haryana, under the name Design Line Consultancy Services, with a clear vision—to provide cutting-edge solutions in civil engineering consultancy, structural design, and infrastructure development. What started as a small yet ambitious firm quickly gained recognition for its commitment to quality, precision, and client satisfaction.

                    </p>
                    <p className="mb-4">
                    As our expertise grew, so did our aspirations. Recognizing the need for a broader platform to serve the evolving demands of the industry, we expanded and, in 2021, established ourselves as Design Line Consultancy Services Private Limited in Hisar, Haryana. This transformation marked a significant milestone, positioning DLCSPL as a leading player in the field of highways, bridges, building design, proof checking, quantity estimation, surveying, and project management consultancy (PMC).
                    </p>
                    <p className="mb-4">
                    With a strong foundation and an expanding portfolio of successful projects, DLCSPL continues to contribute to the growth and modernization of India's infrastructure. Our journey is defined by trust, integrity, and excellence, and as we move forward, we remain committed to shaping the future of engineering with visionary solutions and unwavering dedication
                    </p>
                    <h2 className="text-2xl font-bold text-gray-700 mt-8">Key points in development journey</h2>
                </div>
        {/* <h1 className='py-4 text-center text-lg' ><strong>Key Dates in Our History</strong></h1> */}
      <div className="container mx-auto w-full h-full bg-gray-200">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div 
          className="border-2 absolute border-opacity-20 border-gray-700 h-full left-[9%] md:left-[50%]" 
          // style={{ left: "50%" }}
        ></div>
        
        {timelineItems.map((item) => (
          <div
            key={item.id}
            className={`gap-6 mb-8 flex flex-row justify-between items-center w-full ${item.position === "left" ? "md:flex-row-reverse" : ""}`}
          >
            <div className="order-1 w-full md:w-5/12 hidden md:block"></div>
            
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white">
                {item.id}
              </h1>
            </div>
            
            <div
              className={`order-1 flex  ${item.color} rounded-lg relative shadow-xl w-full md:w-5/12 `}
            >
              <div className='px-6 py-4'>
              <h3 className={`mb-3 font-bold ${item.textColor} text-xl`}>
                {item.title}
              </h3>
              <p className={`text-sm leading-snug tracking-wide ${item.textColor}`}>
                {item.description}
              </p>
              </div>
              <div className='w-[250px]'>
                {/* <div className='absolute bg-orange-500 p-2'>
                  <h1 className='text-sm md:text-lg'>{item.date}</h1>
                </div> */}
                <img src={item.img} alt=""  className='rounded-lg ' />
              </div> 
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default History

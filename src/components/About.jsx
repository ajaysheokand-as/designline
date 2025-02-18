import Achievement from "./Achievement";
import Footer from "./Footer";
import React from 'react';
import { Link } from "react-router-dom";
const TeamMemberCard = ({ name, role, image, description }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-blue-600 mb-2">{role}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
  
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src={'/images/construction-team.jpeg'} 
            alt="Construction Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Building the Future Together</h1>
          <p className="text-xl md:text-2xl">30 Years of Excellence in Consultancy</p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Since 1993, Design Line Group of Consultancy has been at the forefront of innovative building solutions. 
                What started as a small family business has grown into one of the most trusted names 
                in commercial and residential construction.
              </p>
              <p className="text-gray-600 mb-8">
                We combine traditional craftsmanship with cutting-edge technology to deliver projects 
                that stand the test of time while meeting modern sustainability standards.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 200+ Completed Projects</li>
                <li>✓ LEED Certified Professionals</li>
                <li>✓ 24/7 Project Support</li>
                <li>✓ 5-Year Workmanship Guarantee</li>
              </ul>
            </div>
            <img 
              src='/images/construction-site.jpeg'
              alt="Construction Site" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Stats Section */}
      <Achievement></Achievement>
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can bring your construction project to life with expertise and care.
          </p>
          <Link to={'/contact'} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
      <Footer/>
    </div>

  );
};

export default About;
import React ,{useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { serviceData , features , Challenges , textProject} from "./data/main";
import Footer from "./Footer";
const ProjectDetail = () => {
  const params = useParams();
  const newData = serviceData.filter((d) => d.id === Number(params.id))[0]; 
  useEffect(() => {
    window.scrollTo(0,0)
   }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={newData.img}
            alt="Project Site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {newData.heading}
          </h1>
          {/* <p className="text-xl md:text-2xl">
            Modern Commercial Space Development
          </p> */}
        </div>
      </div>

      {/* Project Overview */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 mb-4">
                {newData.description}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-blue-600 text-3xl mb-2 flex justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Details */}
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4 text-gray-600">
                {textProject.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {Challenges.heading}
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                   {newData.heading}
                  </h3>
                  <p className="text-gray-600">
                   {Challenges.desc2}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Sustainability Goals
                  </h3>
                  <p className="text-gray-600">
                    {Challenges.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Team */}
      {/* <section className="py-16 bg-gray-50 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Project Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                
                  <img
                    src={member.imgSrc}
                    alt={member.role}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                 
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Footer/>
    </div>
  );
};

export default ProjectDetail;

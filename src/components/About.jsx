import Achievement from "./Achievement";
import Footer from "./Footer";
import React from "react";
import { Link } from "react-router-dom";
import { careerPage } from "./data/main";

const About = () => {
  const appreciationData = [
    {
      title: "General Client Appreciation",
      message:
        "At Design Line Consultancy Services Pvt. Ltd., we believe that strong relationships and trust are the foundation of every successful project. Your unwavering confidence in our ability to deliver high-quality engineering and consultancy services fuels our drive to innovate and excel...",
    },
    {
      title: "Appreciation for Feasibility Studies & Preliminary Design",
      message:
        "Feasibility studies are the foundation of every great project, and we are honored that you trust us to provide insightful, data-driven analyses that guide your decisions...",
    },
    {
      title: "Appreciation for Project & Construction Management",
      message:
        "Efficient project execution is a result of meticulous planning, seamless coordination, and an unwavering commitment to quality. Your trust in our Project and Construction Management services empowers us...",
    },
    {
      title: "Appreciation for Detailed Project Reports & Design Services",
      message:
        "Designing and delivering a project requires both technical expertise and a deep understanding of client expectations. Your confidence in our ability to create Detailed Project Reports, Proof Checking, and Comprehensive Design Solutions motivates us...",
    },
    {
      title: "Appreciation for Road Safety & Pedestrian Infrastructure",
      message:
        "Road safety is a crucial aspect of infrastructure development, and your commitment to ensuring safer roads inspires us to deliver top-notch Road Safety Audits, Pedestrian Bridge Designs, and Traffic Management Solutions...",
    },
    {
      title: "Appreciation for Structural & Pavement Condition Assessments",
      message:
        "Accurate road and structural assessments are essential for long-term sustainability and safety. Your trust in our ability to conduct comprehensive evaluations enables us to provide precise, data-backed insights...",
    },
    {
      title: "Appreciation for Traffic Analysis & Road Evaluation Services",
      message:
        "Understanding traffic patterns and road conditions is key to efficient urban planning and highway development. Your trust in our Automatic Traffic Counter and Classifier (ATCC) technology and Road Evaluation methodologies ensures...",
    },
    {
      title: "Appreciation for Environmental & Social Impact Studies",
      message:
        "Sustainability is at the core of modern infrastructure, and your commitment to environmental responsibility strengthens our shared vision for a greener future...",
    },
    {
      title: "Project Completion Appreciation",
      message:
        "Every project completion marks a milestone, and we take this moment to express our sincere gratitude for your trust and collaboration. Your valuable insights, commitment, and partnership have played a significant role in the success...",
    },
    {
      title: "Appreciation for a New Client",
      message:
        "We are honored to welcome you as a valued client of Design Line Consultancy Services Pvt. Ltd. Your decision to partner with us is truly appreciated, and we are committed to delivering the highest quality...",
    },
    {
      title: "Appreciation for Commitment to Quality & Innovation",
      message:
        "Your commitment to quality, efficiency, and forward-thinking solutions aligns perfectly with our mission to deliver excellence in every project...",
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={"/images/construction-team.jpeg"}
            alt="Construction Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Building the Future Together</h1>
          {/* <p className="text-xl md:text-2xl">30 Years of Excellence in Consultancy</p> */}
        </div>
      </div>

      {/* About Section */}
      {/* <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Since 1993, Design Line Group of Consultancy has been at the forefront of innovative
                building solutions. What started as a small family business has grown into one of
                the most trusted names in commercial and residential construction.
              </p>
              <p className="text-gray-600 mb-8">
                We combine traditional craftsmanship with cutting-edge technology to deliver
                projects that stand the test of time while meeting modern sustainability standards.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 200+ Completed Projects</li>
                <li>✓ LEED Certified Professionals</li>
                <li>✓ 24/7 Project Support</li>
                <li>✓ 5-Year Workmanship Guarantee</li>
              </ul>
            </div>
            <img
              src="/images/construction-site.jpeg"
              alt="Construction Site"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section> */}

<div className="max-w-6xl mx-auto p-6 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-6">
            <img
              src={careerPage.img}
              alt="Two professionals discussing work at a laptop"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {careerPage.heading}
            </h1>
            <p className="text-gray-700 mb-4">
             {careerPage.paragraph1}
            </p>
            <p className="text-gray-700">
             
             {careerPage.paragraph2}
            </p>
          </div>
        </div>
      </div>
     
      {/* Awards Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Awards & Recognitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Add award images here */}
            <img src="/images/award/g3.jpg" alt="Award 1" className="rounded-lg shadow-lg" />
            <img src="/images/award/g1.jpg" alt="Award 2" className="rounded-lg shadow-lg" />
            <img src="/images/award/g2.jpg" alt="Award 3" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-16 bg-gray-100 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Performance & Client Appreciation
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          We take pride in the recognition and positive feedback we receive
          from our clients. Their testimonials stand as proof of our commitment
          to excellence and innovation.
        </p>
      </div>

      {/* Appreciation Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {appreciationData.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.message}</p>
          </div>
        ))}
      </div>
    </section>

      {/* Code of Conduct */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Code of Conduct</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Integrity & Ethics</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ Conduct all business with honesty, transparency, and fairness.</li>
                <li>✔ Avoid conflicts of interest and disclose any ethical concerns.</li>
                <li>✔ Comply with all applicable laws and industry standards.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Commitment to Excellence</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ Deliver high-quality and sustainable solutions.</li>
                <li>✔ Continuously improve skills and adopt new technology.</li>
                <li>✔ Ensure customer satisfaction and reliability.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Respect & Inclusivity</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ Treat all stakeholders with professionalism and respect.</li>
                <li>✔ Promote diversity and a discrimination-free work environment.</li>
                <li>✔ Foster teamwork and collaboration.</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Sustainability & Responsibility</h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ Support eco-friendly engineering practices.</li>
                <li>✔ Minimize environmental impact.</li>
                <li>✔ Contribute positively to communities.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Achievement />

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can bring your construction project to life with expertise and care.
          </p>
          <Link
            to={"/contact"}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
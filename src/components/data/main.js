import {
  FaBuilding,
  FaHardHat,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";

export const navData = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About Us",
  },
  {
    path: "/project",
    title: "Projects",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/career",
    title: "Career",
  },
  {
    path: "/history",
    title: "History",
  },
];

export const homeSection = {
  owner1: "/images/founder1.jpg",
  owner2: "/images/founder2.jpg",
  heading: "Design Line Consultancy Services Private Limited",
  test : `is a fast
growing Civil Engineering Consultancy Company for Highway
and Structural Design` ,
  description: ["Building Design", "Safety Engineers"," ProofChecking", "Quantity Estimation", "Survey", "Earthwork optimization",
"Design Consultation", "PMC", "Construction Supervision and training"],
};

export const sliderData = {
  slide1: "/images/slider1.jpg",
  slide2: "/images/slider2.jpg",
  slide3: "/images/slider3.jpg",
  slide4: "/images/slider4.jpg",
};

export const serviceData = [
  {
    id : 1,
    img : "/images/rode11.webp",
    heading: "Road Network Design & Supervision Consultancy",
    description:
    "Comprehensive professional services focused on the planning, design, and oversight of road infrastructure projects, ensuring efficient layouts, sustainable solutions, and adherence to quality and safety standards throughout the lifecycle of the project.",
  },
  {
    id : 2,
    img : "/images/rodeDesign.jpeg",
    heading: "Bridge/ROB/Flyover Design",
    description:
    "Specialized services in the planning and engineering of bridges, road over bridges (ROB), and flyovers, focusing on structural integrity, functionality, and aesthetic design to ensure safe and efficient connectivity while accommodating site-specific requirements and traffic demands.",
  },
  {
    id : 3,
    img : "/images/rodeDesign.jpeg",
    heading: "Traffic Studies & Transportation Engineering",
    description:
      "Expert services focused on analyzing traffic patterns, forecasting demand, and designing transportation systems to optimize mobility, safety, and efficiency. This includes conducting traffic impact assessments, developing traffic management plans,"}
];

export const SvgIcon1 = ({
  width = "35px",
  height = "35px",
  color = "#0000FF",
}) => (
  <svg
    class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
      stroke="#0000FF"
      stroke-width="3.473"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
      stroke="#0000FF"
      stroke-width="3.473"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

export const SvgIcon2 = ({
  width = "35px",
  height = "35px",
  color = "#0000FF",
}) => (
  <svg
    class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
    width={width}
    height={height}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#a)">
      <path
        d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
        stroke="#0000FF"
        stroke-width="4.341"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.8.2h49.4v49.4H.8z"></path>
      </clipPath>
    </defs>
  </svg>
);
export const SvgIcon3 = ({
  width = "35px",
  height = "35px",
  color = "#0000FF",
}) => (
  <svg
    class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      clip-path="url(#a)"
      stroke="#0000FF"
      stroke-width="3.473"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"></path>
      <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.3.2h49.4v49.4H.3z"></path>
      </clipPath>
    </defs>
  </svg>
);
export const SvgIcon4 = ({
  width = "35px",
  height = "35px",
  color = "#0000FF", // Default blue color
}) => (
  <svg
    class="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
    width={width}
    height={height}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
      stroke={color}
      stroke-width="4.341"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M45.569 24.356v-12.35h-12.35"
      stroke={color}
      stroke-width="4.341"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

export const projectData = [
  {
    image: "/images/project1.png",
    heading: ` PWD B&R Br. Bahadurgarh`,
    description: `Construction of Northern Bypass of Bahadurgarh town on the banks of West Jua Drain from Kharkhoda Assaudha Road to Nahra Bahadurgarh Road- 18 KM`,
  },
  {
    image: "/images/project2.png",
    heading: " PWD B&R Br. Adampur ",
    description:
      "provding post-facto sanction for carrying out the work of online submission of  forest case for 4-lanning of Agroha to Adampur road (SH-10) from RD 106.830 to 107.330 in  Hisar Distt (rd 47094).",
  },
  {
    image: "/images/project3.png",
    heading: " PWD B&R Br. Rohtak",
    description:
      "Quotation for consultancy services for the preparation  of detailed  project  report of consutruction of 7.0 M wide road along eleveted railway track from sector 6  to railway station  in Rohtak. ",
  },
];

export const clientsData = [
  {
    img: "/images/pwd.jpg",
  },
  {
    img: "/images/GMDA.png",
  },
  {
    img: "/images/JC.jpg",
  },
  {
    img: "/images/LN_MALVIYA.jpg",
  },
  {
    img: "/images/CDF.jpg",
  },
  {
    img: "/images/client5.png",
  },
  {
    img: "/images/client2.png",
  },
  {
    img: "/images/client7.png",
  },
];

export const footerData = {
  description: `Design Line Consultancy Services Private Limited has a dedicated team of Professional Staff with Immense knowledge of Indian Standards in Field of Designing, Planning, Management, Testing and Supervision. DLCSPL is a Multi-disciplinary Consultancy group of professionals providing complete Consultancy Services for various infrastructure projects in Highways, Bridges, and Irrigation. The firm provides a variety of solutions covering planning, design and engineering, consulting as well as support construction by way of state-of-the-art PMC services.`,
  instruction:
    " © Copyright 2025, All Rights Reserved by Design Line . PVT. LTD",
  contact: "+91 81684 44506",
  email: "info@dlcsgroup.in",
  adress: `DSS71, Huda Market, Sector 15A, Hisar (125001)`,
};

export const PhoneIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.3092 18.3098C22.0157 18.198 21.8689 18.1421 21.7145 18.1287C21.56 18.1154 21.4058 18.1453 21.0975 18.205L17.8126 18.8416C17.4392 18.9139 17.2525 18.9501 17.0616 18.9206C16.8707 18.891 16.7141 18.8058 16.4008 18.6353C13.8644 17.2551 12.1853 15.6617 11.1192 13.3695C10.9964 13.1055 10.935 12.9735 10.9133 12.8017C10.8917 12.6298 10.9218 12.4684 10.982 12.1456L11.6196 8.72559C11.6759 8.42342 11.7041 8.27233 11.6908 8.12115C11.6775 7.96998 11.6234 7.82612 11.5153 7.5384L10.6314 5.18758C10.37 4.49217 10.2392 4.14447 9.95437 3.94723C9.6695 3.75 9.29804 3.75 8.5551 3.75H5.85778C4.58478 3.75 3.58264 4.8018 3.77336 6.06012C4.24735 9.20085 5.64674 14.8966 9.73544 18.9853C14.0295 23.2794 20.2151 25.1426 23.6187 25.884C24.9335 26.1696 26.0993 25.1448 26.0993 23.7985V21.2824C26.0993 20.5428 26.0993 20.173 25.9034 19.8888C25.7076 19.6046 25.362 19.4729 24.6708 19.2096L22.3092 18.3098Z"
      stroke="#3393ff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MailIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.81501 8.75L10.1985 13.6191C12.8358 15.2015 14.1544 15.9927 15.6032 15.9582C17.0519 15.9237 18.3315 15.0707 20.8905 13.3647L27.185 8.75M12.5 25H17.5C22.214 25 24.5711 25 26.0355 23.5355C27.5 22.0711 27.5 19.714 27.5 15C27.5 10.286 27.5 7.92893 26.0355 6.46447C24.5711 5 22.214 5 17.5 5H12.5C7.78595 5 5.42893 5 3.96447 6.46447C2.5 7.92893 2.5 10.286 2.5 15C2.5 19.714 2.5 22.0711 3.96447 23.5355C5.42893 25 7.78595 25 12.5 25Z"
      stroke="#3393ff"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
);

export const LocationIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 12.9169C25 17.716 21.1939 21.5832 18.2779 24.9828C16.8385 26.6609 16.1188 27.5 15 27.5C13.8812 27.5 13.1615 26.6609 11.7221 24.9828C8.80612 21.5832 5 17.716 5 12.9169C5 10.1542 6.05357 7.5046 7.92893 5.55105C9.8043 3.59749 12.3478 2.5 15 2.5C17.6522 2.5 20.1957 3.59749 22.0711 5.55105C23.9464 7.5046 25 10.1542 25 12.9169Z"
      stroke="#3393ff"
      stroke-width="2"
    />
    <path
      d="M17.5 11.6148C17.5 13.0531 16.3807 14.219 15 14.219C13.6193 14.219 12.5 13.0531 12.5 11.6148C12.5 10.1765 13.6193 9.01058 15 9.01058C16.3807 9.01058 17.5 10.1765 17.5 11.6148Z"
      stroke="#3393ff"
      stroke-width="2"
    />
  </svg>
);

 
export const careerPage = {
  img : "/images/team.jpeg",
  heading : "Life at Design line Group",
  paragraph1 : "At Design Line Consultancy Services Private Limited, we believe that our people are our greatest asset. We are always looking for passionate, skilled, and driven professionals to join our team and contribute to innovative solutions in road network design and supervision consultancy.",
  paragraph2 : "Explore exciting career opportunities with us! If you're ready to make an impact, check out our latest job openings or submit your resume at [your email or application link. Join us in building smarter, sustainable, and well-planned infrastructure for the future!"
}

 export const benefitsSection = {
  heading : "Benefits at Design line Group",
  paragraph : "At Design Line Consultancy Services Private Limited, we value our employees and are committed to providing a rewarding and supportive work environment. Here are some of the key benefits of joining our team:",
  benefitsHeading :"Design line is a great place to work as it enables its employees to benefits like:",
  benefits : [
    "Well-defined talent management system for attracting and retaining talent.",
    "Career spanning from Learning to leadership.",
    "Reach their full potential with enabling environment and career growth opportunities.",
    "Recruitment and selection process provides a mix of regular and contract.",
    "Exposure of working in challenging and enriching projects worldwide.",
    "Robust and transparent performance management s.",
    "Recognition of individual contribution as well as team efforts.",
    "Guidance and strong backing from highly experienced seniors.",
    "Opportunity to work in multidisciplinary tasks.",
    "Offer a wide variety of training & development opportunities so that employees stay relevant, updated and build their credentials and"
],
img : "/images/team2.webp"
 }

 export const jobSection = {
   heading : "Openings at Design Line" , 
   paragraph : "At Design Line Consultancy Services Private Limited, we are always looking for talented and passionate professionals to join our team. If you’re ready to take your career to the next level in the road network design and supervision consultancy sector, explore our current job opportunities below.",
   emailText : "You are welcome to send your resume to following email:",
   email : "info@dlcsgroup.in",
   text : "We will respond to you once there is a suitable opening."
 }



 export const features = [
  { icon: <FaBuilding />, title: "Project Size", value: "45,000 sq.ft" },
  { icon: <FaHardHat />, title: "Construction Type", value: "Commercial" },
  { icon: <FaCalendarAlt />, title: "Duration", value: "18 Months" },
  { icon: <FaDollarSign />, title: "Project Value", value: "$12.5M" },
]; 
// export const teamMembers = [
//   {
//     name: "Sarah Johnson",
//     role: "Lead Architect",
//     description: "15 years experience in commercial design",
//     imgSrc: "architect",
//   },
//   {
//       name: "Michael Chen",
//       role: "Project Manager",
//       description: "Certified PMP with 20+ projects completed",
//       imgSrc: "architect",
      
//   },
//   {
//       name: "Emma Wilson",
//       role: "Structural Engineer",
//       description: "Specialist in high-rise constructions",
//       imgSrc: "architect",
//   },
// ]; 
export const textProject = [
  "Energy-efficient glass facade system",
  "Smart building management system",
  "Earthquake-resistant structure",
  "Green roof and solar panel integration",
];
export const teamMembers = [
  {
    name: "Satbir Singh Boora",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "20+ years experience in construction management"
  },
  {
    name: "Rajesh Beniwal",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "Award-winning architectural designer"
  },
  {
    name: "Mukesh Kumar",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "Specialist in sustainable building practices"
  },
  {
    name: "Abhishek Boora",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "Expert in large-scale project coordination"
  },
  {
    name: "BIR Singh Sihag",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "Expert in large-scale project coordination"
  },
  {
    name: "Satinder Singh",
    role: "Director",
    image: "/images/founder1.jpg",
    description: "Expert in large-scale project coordination"
  },
];

 export const Challenges = {
  heading : " Challenges & Solutions",
  desc : `Achieved LEED Platinum certification through use of recycled
                 materials and renewable energy systems.`,
  desc2 : ` Implemented innovative foundation techniques to work within
                 tight urban space while maintaining adjacent building
                 integrity.`          
}
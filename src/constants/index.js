import {
    mobile,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    appwrite,
    currencyConvertorPortfolio,
    jansehatImg,
    settleSmartPortfolio,
    VictusImg,
    passwordGeneratorPortfolio,
    AutoCompletePortfolio,
    Todo,
    iitDhanbadImg,
    threejs,
    mysql,
    python,
    C,
    java,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Java",
      icon: mobile,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: 'appwrite',
      icon: appwrite,
    },
    {
      name: 'java',
      icon: java,
    },
    {
      name: 'python',
      icon: python,
    },
    {
      name: 'mysql',
      icon: mysql,
    },
    {
      name: 'C',
      icon: C,
    },
    
  ];
  
  const experiences = [
    {
      title: "Coordinator of Coding Club",
      company_name: "Codigo Plataforma",
      iconBg: "#383E56",
      date: "August 2024 - Present",
      link: "https://www.linkedin.com/company/codigo-plataforma/",
      points: [
        "I am Coordinator of the coding club of our college.",
        "I have been volunteering in different coding events.",
        "We have worked on live projects with the juniors.",
        "Learned about managing studies and also maintaing my presence on the club.",
      ],
    },
{
  title: "Full-Stack Developer",
  company_name: "Development",
 
  iconBg: "#E6DEDD",
  
  points: [
    "Developing full-stack web applications using React.js, Next.js, and Node.js.",
    "Designing and integrating REST APIs with MongoDB for efficient data management.",
    "Building responsive, user-centric interfaces with Tailwind CSS.",
    "Implementing authentication, state management, and scalable backend logic.",
    "Continuously learning and applying new technologies to improve performance and usability.",
  ],
},
    {
  title: "Hackathons",
  company_name: "SIH, IIT Bhubaneswar (Code Relay 2.0), IIT Dhanbad (HackFest'25)",
  
  iconBg: "#383E56",
  
  points: [
    "Selected as a Grand Finalist in Smart India Hackathon (SIH), working on a real-world problem statement and building a scalable solution in a competitive national-level environment.",
    "Also participated in Code Relay 2.0 (IIT Bhubaneswar) and HackFest'25 (IIT Dhanbad), contributing to frontend and full-stack development.",

  ],
}
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
  name: "JanSehat",
  description:
    "A full-stack healthcare platform developed during the Smart India Hackathon to improve access to medical resources and awareness. It enables users to discover nearby healthcare services, access reliable health information, and navigate essential resources through an intuitive and accessible interface.",
  
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "text-yellow-400",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "text-violet-400",
    },
  ],

  image: jansehatImg,
  source_code_link: "https://github.com/Mugdha-Naik/Jansehat.git",
},

{
  name: "SettleSmart – Group Expense Manager",
  description:
    "A full-stack web app for managing group expenses with automated settlements and a reputation system. Users can create groups, add and split expenses, track UPI/cash payments, and upload receipts with AI-assisted validation. Built with a ledger-based approach to ensure accurate and consistent settlements.",
  tags: [
    {
      name: "next.js",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "typescript",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "green-text-gradient",
    },
    {
      name: "nextauth",
      color: "pink-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
    { name: "AI/OCR", color: "yellow-text-gradient" }
  ],
  image: settleSmartPortfolio, // replace with your actual image variable
  source_code_link: "https://github.com/your-username/settlesmart",
},
    {
  name: "Sentivent – AI-Powered Sentiment Analysis Platform",

  description:
    "A full-stack AI-driven sentiment analysis platform that processes customer feedback and social media data in real time. Integrates machine learning-based sentiment classification, rule-based issue detection, and Gemini AI to generate actionable insights, prioritize issues, and visualize trends through an interactive dashboard.",

  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "express",
      color: "text-yellow-400",
    },
    {
      name: "mongodb",
      color: "text-violet-400",
    },
    {
      name: "chartjs",
      color: "text-cyan-400",
    },
    {
      name: "gemini-ai",
      color: "text-indigo-400",
    },
    {
      name: "nltk",
      color: "text-orange-400",
    },
    {
      name: "machine-learning",
      color: "text-red-400",
    },
    {
      name: "tf-idf",
      color: "text-emerald-400",
    },
  ],

  image: iitDhanbadImg, // replace with your image import

  source_code_link: "https://github.com/Mugdha-Naik/Hackfest25.git",
},
    {
  name: "Sentivent -  Decentralized AI Training Platform",

  description:
    "A verifiable distributed AI training platform that leverages decentralized computing to parallelize machine learning workloads across independent nodes. Integrates Zero-Knowledge cryptography for trustless verification and smart contracts to automate reward distribution, creating a scalable and self-sustaining AI ecosystem.",

  tags: [
    {
      name: "nextjs",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "green-text-gradient",
    },
    {
      name: "typescript",
      color: "text-yellow-400",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
    {
      name: "nodejs",
      color: "text-violet-400",
    },
    {
      name: "socket.io",
      color: "text-cyan-400",
    },
    {
      name: "python",
      color: "text-orange-400",
    },
    {
      name: "pytorch",
      color: "text-red-400",
    },
    {
      name: "solidity",
      color: "text-indigo-400",
    },
    {
      name: "ethers.js",
      color: "text-emerald-400",
    },
    {
      name: "hardhat",
      color: "text-amber-400",
    },
    {
      name: "zk-cryptography",
      color: "text-purple-400",
    },
  ],

  image: VictusImg, // replace with your actual image import

  source_code_link: "https://github.com/Mugdha-Naik/Victus.git",
},
    

  ];
  
  export { services, technologies , experiences, testimonials, projects };
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
    blogPortfolio,
    passwordGeneratorPortfolio,
    AutoCompletePortfolio,
    Todo,
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
      title: "Front End Developer",
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
      points: [
        "I am Coordinator of the coding club of our college.",
        "I have been volunteering in different coding events.",
        "We have worked on live projects with the juniors.",
        "Learned about managing studies and also maintaing my presence on the club.",
      ],
    },
    {
      title: "Front-End Developer",
      company_name: "Development",
     
      iconBg: "#E6DEDD",
      
      points: [
        "Developing websites using React.js.",
        "Learning new skills everyday to make the websites user friendly and responsive.",
        "In a search of finding Internship to showcase my skills.",
        "Ready to learn and grow with the Organization I work with.",
      ],
    },
    {
      title: "Hackathons",
      company_name: "participated in 2 hackathons",
      
      iconBg: "#383E56",
      
      points: [
        "Participated in 2 Hackathons by far.",
        "Worked with the frontend part of the hackathon to make it dynamic and beautiful.",
        "Learned about Teamwork and Time management skills.",
        "Been open to new world problem statements.",
      ],
    },
    
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
      name: "Blog Website",
      description:"A full-stack blogging platform built with React, Redux, Tailwind CSS, and Appwrite. Features include user authentication, post creation with image uploads, post editing and deleting.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "react router",
          color: "text-yellow-400",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
        {
          name: "appwrite",
          color: "text-violet-400"
        }
      ],
      image: blogPortfolio,
      source_code_link: "https://github.com/Mugdha-Naik/Blog-Project-React-.git",
    },

    {
      name: "Currency Convertor",
      description:
        "A responsive React app for real-time currency conversion. Users can select currencies, enter amounts, and instantly see converted values using live exchange rates. Features a modern UI with Tailwind CSS and a convenient swap function.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fetch API",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: currencyConvertorPortfolio,
      source_code_link: "https://github.com/Mugdha-Naik/Currency-Convertor-React-.git",
    },
    {
      name: "Todo Website",
      description:
        "A modern todo list application built with React and Context API. Features include adding, editing, deleting, and marking tasks as complete, with persistent storage using localStorage.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Context API",
          color: "green-text-gradient",
        },
        {
          name: "react router",
          color: "text-yellow-400",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: Todo,
      source_code_link: "https://github.com/Mugdha-Naik/Todo-React-.git",
    },
    {
      name: "Password Generator",
      description: "A responsive React app that creates secure, customizable passwords. Users can set password length, include numbers and special characters, and copy passwords with one click.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
        {
          name: "tailwindcss",
          color:"pink-text-gradient",
        },
      ],
      image: passwordGeneratorPortfolio,
      source_code_link: "https://github.com/Mugdha-Naik/Password-Generator-React-.git",
    },
    {
      name: "AutoComplete SearchBar",
      description: "A modern React.js application featuring an autocomplete search bar for recipes. The app fetches data from the DummyJSON API with debounced input and caching for performance.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fetch API",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color:"pink-text-gradient",
        },
      ],
      image: AutoCompletePortfolio,
      source_code_link: "https://github.com/Mugdha-Naik/AutoComplete-SearchBar-React-.git"

    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };
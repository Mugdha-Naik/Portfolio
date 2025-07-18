import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from '../assets';

function Navbar() {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0,0);
            window.history.replaceState(null, null, '#');
          }}
        >
          <img src="/M_Logo.png" 
            alt="logo"
            className='w-9 h-9 object-contain'
          />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Mugdha  &nbsp;
            <span className='sm:block hidden'> | Frontend Developer</span>

          </p>
        </Link>

        <ul className='list-none  hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id}
              className={`${
                active === link.title 
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={(e) => {
                
                setActive(link.title);
                
              }}
            >
              <a href={`#${link.id}`} >{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
           src={toggle ? close : menu} 
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)} 
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>

                    <div></div>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 

// Assume you're looping through a navLinks array like this:
// const navLinks = [
//   { id: "about", title: "About" },
//   { id: "projects", title: "Projects" },
//   { id: "contact", title: "Contact" }
// ];

// Now, link.id is a string like "about".
// `#${link.id}` → "#about"

// Therefore:
// <a href={`#${link.id}`}>About</a>

// renders as:
// <a href="#about">About</a>




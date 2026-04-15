import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) => {
    return (
      <Tilt className='xs:w-[250px] w-full' >
        <motion.div
            variants={fadeIn('right', 'spring', 0.5*index, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>

              <div 
              option={{
                max: 45,
                scale: 1,
                speed: 450
              }}
              className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '>
                <img src={icon} alt={title}
                className='w-16 h-16 object-contain' />
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              </div>

        </motion.div>
      </Tilt>

    )
}

function About() {

  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p 
                  className='mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]'
                  variants={fadeIn("", "", 0.1, 1)}>
                                  {/* direction, time, delay, duration of animation */}

                                  Bringing ideas to life — one build at a time. I develop 
                                  full-stack web applications that are fast, scalable, and 
                                  intuitive to use. From crafting responsive, high-performance 
                                  UIs to designing efficient backend APIs, I work across the 
                                  MERN stack and Next.js to deliver seamless, end-to-end 
                                  experiences. Whether it’s managing state, handling side 
                                  effects, or building clean, reusable backend logic, I 
                                  focus on writing code that is maintainable, structured, and 
                                  reliable. Currently seeking a full-stack internship to 
                                  contribute to real-world projects and grow through hands-on 
                                  development.
        </motion.p>

        <div className='mt-20 flex flex-wrap gap-10 justify-evenly'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>
    </>

  )
}

export default SectionWrapper(About, "about")
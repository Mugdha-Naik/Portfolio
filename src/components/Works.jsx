import { motion } from 'framer-motion'
import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'



const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
    return(
      <motion.div variants={fadeIn('up', 'spring', index*0.5, 0.75)}>
                                                    {/* one by one they are going to come and fade in, duration */}
              <Tilt
                option={{
                  max: 45,
                  scale: 1,
                  speed: 450
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>

                  <div className='relative w-full h-[230px] '>
                    <img src={image} alt={name}
                    className='w-full h-full object-cover rounded-2xl' />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        {/* for the github icon at the right top */}

                        <div 
                        onClick={() => window.open
                          (source_code_link, '_blank')}
                          className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                          <img src={github} alt='github'
                          className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                  </div>

                  <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description}</p>
                  </div>

                  <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                      <p key={tag.name}
                      className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                      </p>
                    ))}
                  </div>
              </Tilt>
      </motion.div>
    )
}

function Works() {
  return (
    <>
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Projects</p>
            <h2 className={styles.sectionHeadText}>Projects. </h2>
      </motion.div>

      <div className='w-full flex '>
        <motion.p
            variants={fadeIn('','', 0.1, 1)}
                            /* (no direction, no time, delay, duration) */

                            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>Bringing ideas to life — one render at a time.
                            I build intuitive, responsive UIs that mount fast, 
                            pass clean props, and route smoothly. Whether it's 
                            managing state, handling side effects, or keeping 
                            components reusable and lean, I love creating frontend 
                            experiences that just work. Currently seeking a React 
                            internship to write meaningful code, learn from real-world 
                            projects, and grow with every re-render.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")
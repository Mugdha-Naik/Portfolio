import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  return (
    <section
      className='relative w-full h-screen mx-auto'
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm 
            <span className='text-[#915eff]'> Mugdha</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>An Aspiring Frontend Developer</p>
        </div>
      </div>

      {!isMobile && <ComputersCanvas />}
      {isMobile && (
        <section>
        <img
          src="/staticImg.png"
          alt="Computer"
          className="w-full h-full object-cover absolute inset-0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />

<div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#6e3ddb]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div className=''>
          <h1 className={`${styles.heroHeadText} text-white`}> Hi, I'm 
            <span className='text-white'> Mugdha</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>An Aspiring Frontend Developer</p>
        </div>
      </div>
        </section>
      )}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex  justify-center items-center p-2'>
            <motion.div
            animate={{
               y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'}}
              className='w-3 h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

function Contact() {
  const formRef=useRef()
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:"",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name] : value})
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      setLoading(true);

      // template_polltx4
      // service_wfj0424  
      // L49DSvcuSZIMJgl47

      emailjs.send(
        'service_pts8ld7', 
        'template_polltx4',
        {
          from_name: form.name,
          to_name: 'Mugdha Naik',
          from_email: form.email,
          to_email: 'mugdhanaik63@gmail.com',
          message: form.message,
        },
        'L49DSvcuSZIMJgl47'
        )   
        .then(() => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, (error)=>{
          setLoading(false)
          console.log(error)
          alert('Something went wrong')
        })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1 )}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>Get in Touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col gap-8 mt-12'>
                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '> Your Name </span>
                  <input type="text"
                         name='name'
                         value={form.name}
                         placeholder="What's your name? "
                         className='bg-tertiary py-4 px-6 border-none font-medium
                         placeholder:text-secondary text-white rounded-lg outlined-none'
                         onChange={handleChange}
                   />
                </label>

                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '> Your Email </span>
                  <input type="email"
                         name='email'
                         value={form.email}
                         placeholder="What's your email? "
                         className='bg-tertiary py-4 px-6 border-none font-medium
                         placeholder:text-secondary text-white rounded-lg outlined-none'
                         onChange={handleChange}
                   />
                </label>

                <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4 '> Your Message </span>

                  <textarea rows='7'
                        
                         name='message'
                         value={form.message}
                         placeholder="What do you want to say? "
                         className='bg-tertiary py-4 px-6 border-none font-medium
                         placeholder:text-secondary text-white rounded-lg outlined-none'
                         onChange={handleChange}
                   />
                </label>

                <button 
                className='w-fit text-white font-bold shadow-md shadow-primary bg-tertiary py-3 rounded-xl px-8 outline-none'
                type='submit'
                >
                  {loading ? 'Sending...' : 'Send'}

                </button>
              </form>
      </motion.div>

      <motion.div 
         variants={slideIn('left', 'tween', 0.2, 1)}
         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
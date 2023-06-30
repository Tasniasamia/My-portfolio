import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeIn } from '../variants';
const About = () => {
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.5,
  // });
  return <div className='section'id="about">
<div className='mx-auto container ' >
  <div className='flex lg:flex-row flex-col items-center justify-between gap-y-25 gap-x-20'>

<motion.div className='bg-about2 bg-no-repeat bg-contain bg-top w-[500px] lg:h-[800px]  h-[600px] mix-blend-lighten  mb-10 lg:mb-0 ' variants={fadeIn('right',0.3)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
</motion.div>


<motion.div className='lg:h-[600px] lg:flex lg:items-center lg:gap-y-48' variants={fadeIn('left',0.5)}initial="hidden"whileInView={"show"} viewport={{once:"false", amount: 0.5}}>
  <div>
  <h2 className='text-accent h2 mb-3 '> About Me</h2>
  <h3 className='h3 mb-3 max-w-[400px]'>I Just Learned Mern Stack Development in 6 months</h3>
  <p className='lg:max-w-[600px]'>I just Learned full-stact-web Development . I learned how to create a web application using html,css,bootstrap,javascirpt ,react ,node js and mongoDB </p>
  {/* experience */}

<div className='flex  gap-x-10 gap-y-25 mt-6'>

<div>
  <div className='text-gradient text-[40px] font-tertiary'>
    <CountUp start={-1} end={6} duration={5}/>
  </div>
  <div className='font-primary text-sm tracking-[2px] font-bold'>Months of <br/> Experience</div>
</div>

<div>
  <div className='text-gradient text-[40px] font-tertiary'>
    <CountUp start={-1} end={12} duration={5}/> +
  </div>
  <div className='font-primary text-sm tracking-[2px] font-bold'>Projects <br/> Completed</div>
</div>

</div>

<div className='  max-w-max my-8  '>

<button className='btn btn-lg me-4'><a href="Mern_Stack_Resume_of_(Tasnia Sharin)-1.pdf" download="myfile.pdf"  >Download Resume</a></button> 
  <a href="#"className='text-gradient btn-link'>MY Portfolio</a></div>

</div>
</motion.div>
</div>
</div>
</div>





};

export default About;

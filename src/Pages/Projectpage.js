import React from 'react';
import { motion } from 'framer-motion';
import AboutBanner from '../Components/AboutBanner';

function Projectpage() {
  return (
    <div>
      <motion.div className='page2' animate={{left:"auto", right:0, width:"0", transition:{duration:0.5}}} ></motion.div>
      <AboutBanner/>
    </div>
  )
}

export default Projectpage
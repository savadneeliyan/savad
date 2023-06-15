import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'

function Loader() {
  const controls = useAnimation();

  useEffect(() => {
    const animateName = async () => {
      await controls.start("top");
      await controls.start("bottom");
    };

    animateName();
  }, []);
    
const transition = {duration: 1.4, ease:[.43, .13,.23,.96]}

    
const firstname = {
  initial:{
    y:0
  },
  animate:{
    y:0,
    transition:{
      delayChildren:0.6,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
}
    
const lastname = {
  initial:{
    y:0
  },
  animate:{
    y:0,
    transition:{
      delayChildren:1.5,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
}
    
const letter = {
    initial:{
        y:400
    },
    animate: {
        y:0,
        transition:{duration: 1, ...transition}
    }
}

  return (
    <Section  className="name-container">
      <Header
        className="name-top"
        initial="initial"
        // animate={controls}
        variants={firstname}
          >
              <motion.span variants={letter}>M</motion.span>
              <motion.span variants={letter}>O</motion.span>
              <motion.span variants={letter}>H</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>M</motion.span>
              <motion.span variants={letter}>M</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>D</motion.span>
      </Header>
      <Header
        className="name-bottom"
        initial="initial"
        animate={controls}
        variants={lastname}
      >
              <motion.span variants={letter}>S</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>V</motion.span>
              <motion.span variants={letter}>A</motion.span>
              <motion.span variants={letter}>D</motion.span>
      </Header>
    </Section>
  );
};


export default Loader

const Section = styled(motion.div)`
    height:0vh;
    width:100vw;
    background-color:black;
    color:#fff;
    position:relative;
    z-index:999;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:20px;

`
const Header = styled(motion.div)`
    font-size:30px
`


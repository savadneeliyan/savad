import React from "react";
import Nav2 from "../Components/Nav2";
import { AnimatePresence, motion } from "framer-motion";
import Project from "../Components/Project";
import styled from "styled-components";
import Footer from "../Components/Footer";

function Work() {


const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: .3,
      delay:1
    }
  }
}
  
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1

  }
}



  return (
    <>
      <Nav2 />
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          className="page2"
          animate={{
            left: "auto",
            right: 0,
            width: "0",
            transition: { duration: 0.5 },
          }}
        ></motion.div>
      </AnimatePresence>
      <motion.div
        className="page"
        key="index"
        exit={{ width: "100%", transition: { duration: 1 } }}
      ></motion.div>
      <>
        <div>
          <Banner >
            <Wrapper><Title initial={{y:100}} animate={{y:0 }} transition={{ transition:1, delay: 2 }} >My Works.</Title></Wrapper>
          </Banner>
        </div>
        <Project />


        <motion.div style={{width:"1200px", margin:"100px auto"}}>
          <motion.div style={{ overflow:"hidden", position:"relative", width:"fit-content" }}>
            <motion.div initial={{ width: "0%", top: 0, height: "100%", position: "absolute", background: "#000"}}
              whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.h2 initial={{y:50, fontSize:"45px",lineHeight:"50px",}} whileInView={{ y: 0 }} transition={{ delay: 1, transition: 1 }} viewport={{ once: true }}>
              Github Projects
            </motion.h2>
          </motion.div>
          <motion.div style={{ overflow:"hidden" }}>
            <motion.p style={{y:"20px",margin:"30px 0", fontSize:"25px",lineHeight:"40px", opacity:0}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{ delay:1, duration: 1 }}>Here are some of my projects that I created during my spare time. I constantly keep on improving my skills by making these fun projects. These projects are available on my github repository</motion.p>
          </motion.div>

          <motion.ul initial="hidden" variants={container} animate="visible" viewport={{once: true}}>
            <List key={1} variants={item} >git project 1</List>
            <List key={1} variants={item} >git project 2</List>
            <List key={1} variants={item} >git project 3</List>
            <List key={1} variants={item} >git project 4</List>
            <List key={1} variants={item} >git project 5</List>
            <List key={1} variants={item} >git project 6</List>
            <List key={1} variants={item} >git project 7</List>
            <List key={1} variants={item} >git project 8</List>
            <List key={1} variants={item} >git project 9</List>
            <List key={1} variants={item} >git project 10</List>
          </motion.ul>
        </motion.div>



        <Footer/>
      </>
    </>
  );
}

export default Work;




const Banner = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:center;
  height:100vh;
  flex-direction:column;
  background:url(/images/WorkBg.png);
  background-repeat:no-repeat;
  background-position:center center;
  background-size:600px
`;

const Title = styled(motion.h2)`
  text-align: center;
  color: #000;
  font-size:100px;
  line-height:110px;
`;
const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;

const List = styled(motion.li)`
  font-size:24px;
  line-height:34px;
  margin-bottom:20px;
`;
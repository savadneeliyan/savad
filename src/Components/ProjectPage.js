import React, { useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const opening = {
    initial: {
        width: "390px",
        height:"300px",
        right: 0,
        height:"300px",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        margin: "auto",
    },
    animate: {
        left: 0,
        width: "100%",
        height: "100%",
        transform: "none",
        transition: {
            duration: 2,
        },
    },
    exit:{ 

    }
}



function ProjectPage() {
    useEffect(() => {

        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

    }, [])

    const { scrollYProgress  } = useScroll();
    const scale = useTransform( scrollYProgress, [0,1] ,[1, 1.35] )
  return (
      <motion.div initial={{height:0}} animate={{height:"auto"}}>
        <motion.div style={{maxWidth:"100%", position:"relative", maxHeight:"100vh", overflow:"hidden", width:"100%", height:"100vh"}}>
          <motion.img initial="initial" animate="animate" variants={opening} src="https://i.pinimg.com/236x/d3/e5/45/d3e5457d3dc682951a5dd31d7b0b79db.jpg" alt="" />
      </motion.div>
      <TitleContainer>
        <Wrapper><Title initial={{y:100}} animate={{y:0 }} transition={{ transition:1, delay: 2 }} >Demo</Title></Wrapper>
        <Wrapper><Span initial={{y:100}} animate={{y:0 }} transition={{ transition:1, delay: 2 }}>web app {"("} react js{" )"}</Span></Wrapper>
      </TitleContainer>
        <WrapperContainer >
        <Wrapperft style={{marginBottom:"50px"}}>
          <motion.div initial={{width:"0%",top:0, height:"100%", position:"absolute", background:"#000"}} whileInView={{width:"100%", transform:"translateX(100%)"}} transition={{ duration:1}}></motion.div>
          <About className='title' initial={{ y: 92 }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
              About the project.
          </About>
        </Wrapperft>
        <Wrapperft>
          <Pera initial={{y:100, opacity:0}} whileInView={{ y: 0, opacity:1, transition: { duration: 1, delay:1 } }} transition={{ transition:1, delay: 2 }}>
              Movx is a React JS application that lets you browse for movies, tv-shows and actors. You can watch trailers, add or remove certain movie to your favorites collection and discover upcoming or trending movies. This application was built with React JS, Redux with Redux-Saga for better handling side effects and asynchronous operations and TMDB API for consuming all the data. You can view the source code on my
          </Pera>
        </Wrapperft>

        <BottomContainer>
          <div>
            <Wrapperft>
              <motion.div initial={{ width: "0%", top: 0, height: "100%", position: "absolute", background: "#000" }} whileInView={{ width: "100%", transform: "translateX(100%)" }} transition={{ duration: 1 }}></motion.div>
              <About className='title' initial={{ y: 20,fontSize:"20px" }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
                Platform
              </About>
            </Wrapperft>
            <Wrapperft>
              <Pera className='title' initial={{ y: 16, lineHeight:"16px" , fontSize:"16px" }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
                Web/Mobile
              </Pera>
            </Wrapperft>
          </div>            
          <div>
            <Wrapperft>
              <motion.div initial={{ width: "0%", top: 0, height: "100%", position: "absolute", background: "#000" }} whileInView={{ width: "100%", transform: "translateX(100%)" }} transition={{ duration: 1 }}></motion.div>
              <About className='title' initial={{ y: 20,fontSize:"20px" }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
                Category
              </About>
            </Wrapperft>
            <Wrapperft>
              <Pera className='title' initial={{ y: 16, lineHeight:"16px" , fontSize:"16px" }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
                Other
              </Pera>
            </Wrapperft>
          </div>            
        </BottomContainer>
        <Tech>
          <Wrapperft>
            <motion.div initial={{ width: "0%", top: 0, height: "100%", position: "absolute", background: "#000" }} whileInView={{ width: "100%", transform: "translateX(100%)" }} transition={{ duration: 1 }}></motion.div>
            <About className='title' initial={{ y: 20,fontSize:"20px" }} whileInView={{ y: 0, transition: { duration: 1, delay:1 } }} animate={{ transition: 1, delay: 2 }}>
              Technologies Used
            </About>
          </Wrapperft>
          <ListUl initial={{y:"30px", opacity:0}} whileInView={{ y: 0, opacity:1, transition: { duration: 1, delay:1 } }}>
            <List>HTML5 / </List>
            <List>CSS3 / </List>
            <List>JavaScript / </List>
            <List>SASS / </List>
            <List>React JS /</List>
            <List>Redux /</List>
            <List>Redux-Saga /</List>
            <List>Firebase /</List>
            <List>Webpack</List>
          </ListUl>
          <Wrapperft>
            <Anchor href="#" initial={{y:"60px"}} whileInView={{y:"0px" }} transition={{ duration:0.5}}>
                  See My Work
                  <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                    <path
                      d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                      fill="#fff"
                    />
                  </svg>
                </Anchor>
          </Wrapperft>
        </Tech>
            
        </WrapperContainer>
      </motion.div>
  )
}

export default ProjectPage;


const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
`;
const Wrapperft = styled(Wrapper)`
  width:fit-content;
`;
const TitleContainer = styled(motion.div)`
  margin-bottom:80px;
  margin-top:-20vh;
  position: relative;
  z-index:9;
`;
const Span = styled(motion.h4)`
  text-align:center;
  color:white;
  margin-top:10px;
`;
const Title = styled(motion.h2)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color:  #565454;
  text-align: center;
  color: #fff;
  font-size:100px;
  line-height:110px;
`;
const WrapperContainer = styled(motion.div)`
  max-width:1200px;
  margin:auto;
  min-height:100vh;
  padding:100px 0;
`;
const About = styled(motion.h2)`
  font-size:80px;
  color:#000;
`;
const Pera = styled(motion.p)`
font-size:22px;
line-height:50px;
color:#000;
`;
const BottomContainer = styled(motion.div)`
display:flex;
gap:20px;
margin-top:80px;

${Wrapperft}{
  margin-bottom:30px;
}
`;
const Tech = styled(motion.div)`

`;
const ListUl = styled(motion.ul)`
  margin-top:30px;
  display:flex;
  flex-wrap:wrap;
  max-width:546px;
  gap:20px;
`;
const List = styled(motion.li)`
  list-style:none;
  font-size:17px;
  color:#393939;
`;

const Anchor = styled(motion.a)`
  text-decoration: none;
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  background: none;
  border: none;
  outline: none;
  color: #000;
  margin-top:50px;
  display: block;
  text-decoration: none;
  padding: 20px 40px;
  z-index: 1;
  width: fit-content;
  display:flex;
  align-items: center;
  position: relative;
  gap:20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

  &::after{
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    background: #e8e8e8;
    z-index: -1;
    display: block;
    left: 0px;
    top: 0;
    bottom: 0;
    transition: 0.8s ease;
    border-radius: 50%;
    text-decoration: none;
  }
`;
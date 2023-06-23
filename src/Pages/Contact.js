import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components'

function Contact() {
  return (
    <>
        <Section>
            <AnimatePresence >
                <Start animate={{
                    left: "auto",
                    right: 0,
                    width: "0",
                    transition: { duration: 0.5 },
                }}></Start>
            </AnimatePresence>
            <div style={{position:"absolute",  transform: "rotate(-90deg)", top:"50%", left:"50px", margin:"auto" }}>
                <Overflow style={{position:"relative", marginBottom:"60px"}}>
                    <motion.div
                        initial={{
                            width: "0%",
                            top: 0,
                            height: "100%",
                            position: "absolute",
                            background: "#000",
                        }}
                        whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    ></motion.div>
                    <Side initial={{y:10}} whileInView={{y:0}} transition={{delay:1, transition:1}}> CONTACT </Side>
                </Overflow>
            </div>

            <Container>

                <div style={{paddingTop:"350px"}}>
                    <Overflow style={{position:"relative", marginBottom:"60px"}}>
                        <motion.div
                            initial={{
                                width: "0%",
                                top: 0,
                                height: "100%",
                                position: "absolute",
                                background: "#000",
                            }}
                            whileInView={{ width: "100%", x: ["0%", "0%", "0%", "100%"] }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                        ></motion.div>
                        <H2  initial={{y:60}} whileInView={{y:0}} transition={{delay:1, transition:1}}> Get in touch. </H2>
                    </Overflow>
                    <Overflow  style={{marginBottom:"100px"}}>
                        <P  initial={{ y:30}} whileInView={{y:0}} transition={{delay:1, transition:1}}> Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me. </P>
                    </Overflow>
                </div>
                <motion.div initial={{opacity:0, y:30}} whileInView={{y:0, opacity:1}} transition={{delay:1, transition:1}}>
                    <Label>Your Name</Label>
                    <Input type="text" />
                    <Label>Your email</Label>
                    <Input type="email" />
                    <Label>Subject</Label>
                    <Input type="text" />
                    <Label>Message</Label>
                    <Input type="textarea" style={{height:"200px"}} />
                </motion.div>
            </Container>
        </Section>
    </>
  )
}

export default Contact;

const Section = styled(motion.div)`
    position: relative;
    min-height: 100vh;
`;

const Container = styled(motion.div)`
    max-width: 1200px;
    margin: auto;
`;

const Start = styled(motion.div)`
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    z-index: 999;
    overflow-x: hidden;
`;

const Overflow = styled(motion.div)`
    overflow: hidden;
    width: fit-content;
    position: relative;
`;
const H2 = styled(motion.h2)`
    font-size :50px;
    line-height: 60px;
`;

const P = styled(motion.p)`
    font-size :20px;
    line-height: 30px;
`;

const Label = styled(motion.h5)`
    font-size: 20px;
    font-weight: 400;
    margin-top: 30px;
`;
const Input = styled(motion.input)`
    font-size :20px;
    line-height: 30px;
    width: 100%;
    height: 60px;
    border: 0;
    border-bottom: 1px solid #000;
    outline: none;
`;

const Side = styled(motion.h4)`
    font-size: 12px;
    line-height: 10px;
    font-weight: 400;
`;
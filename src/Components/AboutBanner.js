import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';

function AboutBanner() {
    return (
      <>
        <Wrapper>
          <Container>
            <div>
              <Head>
                <Span
                  initial={{ color: "#fff", y: "40px" }}
                  whileInView={{ color: "#000", y: "0px" }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  I am a passionate front-end
                </Span>
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
                ></motion.div>
              </Head>
              <Head>
                <Span
                  initial={{ color: "#fff", y: "40px" }}
                  whileInView={{ color: "#000", y: "0px" }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  developer and ui/ux
                </Span>
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
                ></motion.div>
              </Head>
              <Head>
                <Span
                  initial={{ color: "#fff", y: "40px" }}
                  whileInView={{ color: "#000", y: "0px" }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  designer with
                </Span>
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
                ></motion.div>
              </Head>
              <Head>
                <Span
                  initial={{ color: "#fff", y: "40px" }}
                  whileInView={{ color: "#000", y: "0px" }}
                  transition={{ delay: 1, duration: 1 }}
                >
                  a keen eye for details.
                </Span>
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
                ></motion.div>
              </Head>
            </div>
            <Img>
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
              ></motion.div>
              <motion.img
                initial={{
                  y: "320px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                whileInView={{ y: "0px" }}
                transition={{ delay: 1, duration: 1 }}
                src="https://images.pexels.com/photos/10004724/pexels-photo-10004724.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
              />
            </Img>
          </Container>
        </Wrapper>
            
        <motion.div style={{display:"flex",justifyContent:"start",gap:"100px", maxWidth:"1200px",margin:"auto"}}>
            <div style={{ position: "relative", display: "flex",gap:"30px",alignItems:"center" }}>
                <div style={{position:"relative",overflow:"hidden"}}>
                    <h3>/01 </h3>
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
                    ></motion.div>
                </div>
                <div style={{position:"relative",overflow:"hidden"}}>
                    <h2 >Story</h2>
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
                    ></motion.div>
                </div>
                </div>
                <div style={{position:"relative",overflow:"hidden"}}>
                    <h2 >A story of hardwork and perseverance.</h2>
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
                    ></motion.div>
                </div>
        </motion.div>

      </>
    );
}

export default AboutBanner;

const Container = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Wrapper = styled(motion.div)`
    max-width: 1200px;
    margin: auto;
    height: 80vh;
    display: flex;
    align-items: center;
`;

const H2 = styled(motion.div)`
    font-size: 40px;
`;

const Img = styled(motion.div)`
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 320px;
`;
const Head = styled(motion.h1)`
    overflow: hidden;
    position: relative;
    width: fit-content;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 10px;
`;

const Span = styled(motion.h5)`
    /* transform: translateY(20px) translateZ(0px); */
`;
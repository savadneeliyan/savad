import React from 'react'
import { motion } from 'framer-motion';


const opening = {
    initial: {
        width: "390px",
        right: "0px",
        height:"100px",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "auto",
        margin: "auto"   
    },
    animate: {
        left: 0,
        width: "100%",
        height: "100vh",
        transition: {
            duration: 1,
            delay:1
        },
    },
    exit:{

    }
}

function ProjectPage() {
  return (
      <>
            <motion.div initial="initial" animate="animate" variants={opening} className="img">
                <motion.img  src="https://i.pinimg.com/236x/d3/e5/45/d3e5457d3dc682951a5dd31d7b0b79db.jpg" alt="" />
            </motion.div>
      </>
  )
}

export default ProjectPage
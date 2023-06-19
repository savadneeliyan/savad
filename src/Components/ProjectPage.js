import React from 'react'
import { motion } from 'framer-motion';

const widthKeyframes = {
    width: ["390px", "390px", "390px", "390px", "1000px"],
    height: ["300px", "300px", "300px", "300px", "800px"],
};

const opening = {
    initial: {
        width: widthKeyframes.width[0],
        right: 0,
        height:"100px",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: "auto",
        margin: "auto",
        transform: "perspective(500px) rotateX(0deg) rotateY(-18deg) rotateZ(0deg)"
    },
    animate: {
        left: 0,
        width: ["390px", "390px", "390px", "390px", "1000px"],
        height: ["300px", "300px", "300px", "300px", "800px"],
        transform: "none",
        transition: {
            duration: 2,
            // delay:1
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
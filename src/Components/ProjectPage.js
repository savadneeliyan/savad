import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const widthKeyframes = {
    width: ["390px", "390px", "390px", "390px", "1000px"],
    height: ["300px", "300px", "300px", "300px", "800px"],
};

const opening = {
    initial: {
        width: "390px",
        height:"300px",
        right: 0,
        height:widthKeyframes.height[0],
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        margin: "auto",
    },
    animate: {
        left: 0,
        width: "100vw",
        height: "100vh",
        transform: "none",
        transition: {
            duration: 2,
        },
    },
    exit:{

    }
}
const before = {
    initial: {
        width: widthKeyframes.width[0],
        right: "120px",
        height: widthKeyframes.height[0],
        margin: "auto",
        marginTop: "100px",
        zIndex:"-1",
        position: "absolute",
        backgroundColor:"#000",
        top: 0,
        bottom: 0,
        left: "auto",
        // transform: "perspective(500px) rotateX(0deg) rotateY(-18deg) rotateZ(0deg)"
    },
    animate: {
        opacity: 0,
        width: 0,
        height: 0,
        transition: {
            duration: 3,
        },
    },
    exit:{

    }
}

function ProjectPage() {
  return (
      <AnimatePresence>
            <motion.div initial="initial" animate="animate" variants={opening} className="img">
                <motion.div initial="initial" animate="animate" variants={before} ></motion.div>
                <motion.img  src="https://i.pinimg.com/236x/d3/e5/45/d3e5457d3dc682951a5dd31d7b0b79db.jpg" alt="" />
            </motion.div>
      </AnimatePresence>
  )
}

export default ProjectPage
import React from 'react';
import { motion } from 'framer-motion';
import AboutBanner from '../Components/AboutBanner';
import { AnimatePresence } from "framer-motion";


function Projectpage() {
  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
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
      <AboutBanner />
    </div>
  );
}

export default Projectpage
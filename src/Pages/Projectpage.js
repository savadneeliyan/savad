import React from 'react';
import { motion } from 'framer-motion';
import AboutBanner from '../Components/AboutBanner';
import { AnimatePresence } from "framer-motion";
import Footer from '../Components/Footer';
import Nav2 from '../Components/Nav2';


function Projectpage() {
  return (
    <div>
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
      <AboutBanner />
      <Footer />
    </div>
  );
}

export default Projectpage
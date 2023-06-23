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
      <Footer />
    </div>
  );
}

export default Projectpage
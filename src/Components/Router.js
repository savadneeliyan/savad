import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from '../Pages/Homepage';
import About from '../Pages/About';
import PageNotFound from "../Pages/PageNotFound";
import { AnimatePresence } from 'framer-motion';
import Projectpage from '../Pages/Projectpage';

function Router() {
  const location = useLocation();
    return (
      <AnimatePresence initial={true} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/us" element={<Projectpage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    );
}

export default Router
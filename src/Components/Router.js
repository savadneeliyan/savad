import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../Pages/Homepage';
import About from '../Pages/About';
import PageNotFound from "../Pages/PageNotFound";
import { AnimatePresence } from 'framer-motion';

function Router() {
    return (
      <BrowserRouter>
        <AnimatePresence initial={false} >
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AnimatePresence>
      </BrowserRouter>
    );
}

export default Router
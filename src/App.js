import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import Router from "./Components/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  useEffect(() => {
    Aos.init() 
    
  }, [])
  
  return (
    <>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import "./index.css";
import Aos from "aos";
import Router from "./Components/Router";

function App() {
  useEffect(() => {
    Aos.init() 
    
  }, [])
  
  return (
    <>
      <Router/>
    </>
  );
}

export default App;

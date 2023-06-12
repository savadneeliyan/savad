import React, { useEffect } from "react";
import "./index.css";
import Nav2 from "./Components/Nav2";
import Banner2 from "./Components/Banner2";
import Love from "./Components/Love";
import Project from "./Components/Project";
import ViewProject from "./Components/ViewProject";
import Footer from "./Components/Footer";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init() 
    
  }, [])
  
  return (
    <div>
      <Nav2 />
      <Banner2 />
      <Love />
      <Project />
      <ViewProject />
      <Footer />
    </div>
  );
}

export default App;

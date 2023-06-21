import React, { useEffect, useState } from 'react'
import Nav2 from '../Components/Nav2';
import Banner2 from '../Components/Banner2';
import Love from '../Components/Love';
import Project from '../Components/Project';
import ViewProject from '../Components/ViewProject';
import Footer from '../Components/Footer';

function Homepage() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 
  }, []);

  return (
    <>
    {/* {isLoading ? <Loader/> : */}
      <>
        <Nav2 />
        <Banner2 />
        <Love />
        <Project />
        <ViewProject />
        <Footer />
      </>
{/* } */}
    </>
  );
}

export default Homepage
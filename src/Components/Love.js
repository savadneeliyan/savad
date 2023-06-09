import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import FadeInSection from './Scoll';
import 'aos/dist/aos.css';

function Love() {

    // useEffect(() => {
    //     Aos.init();
    // }, [])

    const [isVisible, setVisible] = useState(true);
    const domRef =useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        // console.log(domRef)
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    

  return (
        <Section  >
            <Container>
                <Head isVisible={isVisible} ref={domRef} ><Span >Crafted with love.</Span></Head>
                <PWrapper><P>These are a selection of my recent works.</P></PWrapper>
            </Container>
        </Section>
  )
}

export default Love


const Section = styled.div`
    height: 500px;
    background-color:#fff;
    color: #000;
    display: flex;
    align-item:center;
    justify-content:start;
`;

const Container = styled.div`
    max-width: 1200px;
    width:100%;
    margin:auto;
`;

const Head = styled.h1`
    overflow: hidden;
    position: relative;
    width: fit-content;
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 10px;
    &::before{
        content:"";
        position: absolute;
        top: 0;
        transition: 0.5s linear;
        height: 100%;
        display: block;
        background-color: #000;
        height: 50px;
        animation:  ${props => props.isVisible ? 'slide 1s linear' : ''}; 
    }
`;

const Span = styled.span`
    overflow-y: hidden;
    animation: ${props => props.isVisible ? 'slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both' : ''};
`;

const PWrapper = styled.div`
    overflow-y: hidden;
    margin-top:100px;
`;

const P = styled.p`
    position: relative;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 10px;
    height: 20px;
    animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
`;
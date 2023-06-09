import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import FadeInSection from "./Scoll";
import "aos/dist/aos.css";

function ViewProject() {
  

  return (
    <Section>
      <Container>
        <PWrapper>
          <P>THERE'S MORE</P>
        </PWrapper>
        <Head>
          <Span href="#">
            view all projects
            <svg width="50" height="30" viewBox="0 0 10 6" fill="none">
              <path
                d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z"
                fill="black"
              />
            </svg>
          </Span>
        </Head>
      </Container>
    </Section>
  );
}

export default ViewProject;

const Section = styled.div`
  height: 500px;
  background-color: #fff;
  color: #000;
  display: flex;
  align-item: center;
  justify-content: start;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
`;

const Head = styled.h1`
  overflow: hidden;
  position: relative;
  width: fit-content;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 10px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    transition: 0.5s linear;
    height: 100%;
    display: block;
    background-color: #000;
    height: 50px;
    animation: slide 1s linear;
  }
`;

const Span = styled.a`
  text-decoration: none;
  color:#000;
  overflow-y: hidden;
  animation:slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
  display:flex;
  align-items: center;
  justify-content: center;
  gap:20px;
  transition: 0.5s ease;
  &:hover{
    margin-left:30px;
  }
`;

const PWrapper = styled.div`
  overflow-y: hidden;
  margin-top: 100px;
`;

const P = styled.p`
  position: relative;
  width: fit-content;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 10px;
  height: 20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;
`;

import React from 'react'
import styled from 'styled-components';

function Project() {
    return (
    <>
        <Section>
            <Wrapper  data-aos="fade-up"
     data-aos-duration="3000" >
                <ImgWrapper>
                    <Img src="https://i.pinimg.com/236x/d3/e5/45/d3e5457d3dc682951a5dd31d7b0b79db.jpg" alt="" />
                </ImgWrapper>
                <Container>
                    <FirstContainer>
                        <div>
                            <h5>01</h5>
                        </div>
                        <div>
                            <H3>demo</H3>
                            <Span>Web App</Span>
                        </div>
                    </FirstContainer>
                    <PWrapperBt>
                        <Anchor href='#'> See My Work 
                            <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                                <path d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z" fill="black"/>
                            </svg> 
                        </Anchor>
                    </PWrapperBt>
                </Container>
            </Wrapper>
            <Wrapper  data-aos="fade-up"
     data-aos-duration="3000">
                <ImgWrapper>
                    <Img src="https://i.pinimg.com/236x/81/e2/d3/81e2d312113db11286e6a1dfc381c18e.jpg" alt="" />
                </ImgWrapper>
                <Container>
                    <FirstContainer>
                        <div>
                            <h5>02</h5>
                        </div>
                        <div>
                            <H3>demo</H3>
                            <Span>Web App</Span>
                        </div>
                    </FirstContainer>
                    <PWrapperBt>
                        <Anchor href='#'> See My Work 
                            <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                                <path d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z" fill="black"/>
                            </svg> 
                        </Anchor>
                    </PWrapperBt>
                </Container>
            </Wrapper>
            <Wrapper  data-aos="fade-up"
     data-aos-duration="3000">
                <ImgWrapper>
                    <Img src="https://i.pinimg.com/236x/50/82/e6/5082e6e66071cd87690d9a6cb52961f0.jpg" alt="" />
                </ImgWrapper>
                <Container>
                    <FirstContainer>
                        <div>
                            <h5>03</h5>
                        </div>
                        <div>
                            <H3>demo</H3>
                            <Span>Web App</Span>
                        </div>
                    </FirstContainer>
                    <PWrapperBt>
                        <Anchor href='#'> See My Work 
                            <svg width="30" height="18" viewBox="0 0 10 6" fill="none">
                                <path d="M6.71627 0L6.27434 0.441934L8.14928 2.31688H0V2.94189H8.14922L6.27434 4.81678L6.71627 5.25871L9.34566 2.62936L6.71627 0Z" fill="black"/>
                            </svg> 
                        </Anchor>
                    </PWrapperBt>
                </Container>
            </Wrapper>            
        </Section>
    </>
  )
}

export default Project;


const Section = styled.div`
    overflow: hidden;
`;
const Container = styled.div`
//   max-width: 1400px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:65px 0;
`;

const Anchor = styled.a`
  text-decoration: none;
  font-size: 18px;
  text-transform: capitalize;
  position: relative;
  background: none;
  border: none;
  outline: none;
  color: #000;
  margin-top:50px;
  display: block;
  text-decoration: none;
  padding: 20px 40px;
  z-index: 1;
  width: fit-content;
  display:flex;
  align-items: center;
  position: relative;
  gap:20px;
  animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

  &::after{
    position: absolute;
    content: '';
    width: 50px;
    height: 50px;
    background: #e8e8e8;
    z-index: -1;
    display: block;
    left: 0px;
    top: 0;
    bottom: 0;
    transition: 0.8s ease;
    border-radius: 50%;
    text-decoration: none;
  }
`;

const PWrapperBt = styled.div`
    overflow: hidden;
`;

const H3 = styled.h3`
    font-size:40px;
    transition:0.5s ease;
    color:#8f8e8e;
`;

const Span = styled.span`
    font-size:15px;
    transition:0.5s ease;
    color:#8f8e8e;


`;
const ImgWrapper = styled.div`
    width:461pxpx;
    height:300px;
    position:absolute;
    right:23px;
    transition:0.5s ease;
    &::before{
        width: 0px;
        height: 210px;
        transition:0.5s ease;
        content:'';
        right: 0px;
        top: 148px;
        background:#000;
        position:absolute;
        display: inline-block;
        transition-delay: .1s;
    }
`;

const Img = styled.img`
  width: 0;
  height: 100%;
  transition:0.5s ease;
  transform: perspective(500px) rotateX(0deg) rotateY(-18deg) rotateZ(0deg);
`;

const FirstContainer = styled.div`
    display:flex;
    align-items: center;
    gap:20px;
    &::before{
        content:'';
        width:150px;
        transition:0.5s ease;
        height:1px;
        background:#000;
    }
`;

const Wrapper = styled.div`
    possition:absolute;
    background-color: #f8f8f8;
    color: #000;
    transition:0.5s linear;
    border-bottom: 1px solid #e8e8e8;
    
    &:hover{
        background-color: #fff;
    }

    &:hover ${Anchor}::after{
        width: 230px;
        height: 100%;
        right: 0px;
        border-radius: 40px;
    }

    &:hover ${Img}{
        width: 430px;
    }
    &:hover ${ImgWrapper}{
        width: 430px;
        &::before{
            width:390px;
            right: 100px;
        }
    }
    &:hover ${Span}{
        font-size:20px;
        color:#000;
    }
    &:hover ${H3}{
        font-size:70px;
        color:#000;
    }
    &:hover ${FirstContainer}{
        &::before {
            width:200px;
        }
    }
`;
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const Section = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    left:0;
    right:0;
    /* background-color:#fff; */
    z-index: 99;
 `
const Container = styled.div`
    width:1400px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:30px 0;

@media only screen and (max-width: 1430px){
    padding:0 15px;
 }

`
const Links = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    gap:50px;
`
const Logo = styled.h1`
    color:#515151;
    font-size: 20px;;
`
const List = styled.ul`
    display:flex;
    align-items:center;
    /* gap:30px; */

 @media only screen and (max-width: 768px){
    display:none;
 }
`
const ListItemWrapper = styled.div`
    position: relative;
    overflow-y: hidden;
    padding: 5px 20px;
    z-index: 0;
    &::before{
        content:"";
        position: absolute;
        top: 0;
        transition: 0.5s linear;
        height: 100%;
        display: block;
        background-color: #000;
        height: 25px;
        animation: slide 1s linear ; 
        @keyframes slide{
            0%{
                width:0;
                left:0;
            }45%{
                width:100%;
                left:0;
                right:auto;
            }50%{
                width:100%;
                left:auto;
                right:0;
            }100%{
                right:0;
                width: 0;
            }
        }
    }
    
`;
const ListItem = styled.li`
    list-style-type:none;
    color:white;
    cursor:pointer;
    animation: slide-up 2s cubic-bezier(0.65, 0, 0.35, 1) both;

    @keyframes slide-up {
        0% {
            transform: translateY(100px);
        }
        100% {
            transform: translateY(0);
        }
    }
    
    
`;
const ListAnchor = styled(Link)`
    text-decoration:none;
    color:#515151;
    font-size: 20px;        
    transition: 0.5s linear;
    display: block;
    position: relative;
    &:hover{
        transform: translateX(10px);
        transition: 0.3s linear;
    }
    &::before{
        content: "";
        position: absolute;
        width: 0%;
        background: #000;
        height: 2px;
        top: 50%;
        left: -5px;
        display: block;
        transition: 0.5s linear;
    }
    &:hover::before{
        width: 115%;
        max-width: 150px;
    }
`
const Span = styled.span`
    overflow-y: hidden;
`;

function Nav2() {
  return (
      <Section>
          <Container>
              <Links>
                  <Logo>savad</Logo>
                  <List>
                      <ListItemWrapper><ListItem><ListAnchor to='/us'><Span>About</Span></ListAnchor></ListItem></ListItemWrapper>
                      <ListItemWrapper><ListItem><ListAnchor href='/about'><Span>Work</Span></ListAnchor></ListItem></ListItemWrapper>
                      <ListItemWrapper><ListItem><ListAnchor href='#contact'><Span>Contact</Span></ListAnchor></ListItem></ListItemWrapper>
                  </List>
              </Links>
              {/* <Icons>
                  <Icon src='./images/search.png'/>
                  <Button href='#contact'>Hire Now</Button>
              </Icons> */}
              
          </Container>
      </Section>
  )
}

export default Nav2
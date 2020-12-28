import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled from 'styled-components';
import 'typeface-domine';

import './main.css';

export const Wrapper = styled.div`
  font-family: Domine, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const Header = styled.header`
  padding: 2vh 4vw;
  display: flex;

  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 8vw;

  & > h1 {
    margin: 0;
    font-size: max(3rem, 6vw);
  }

  & > div {
    border-left: 2px solid black;
    height: 70%;
    transform: translateY(25%);

    @media all and (max-width: 600px) {
      display: none;
    }
  }
`;

const Footer = styled.div`
  text-align: center;
  font-size: .8rem;
  position: absolute;
  bottom: 0;
  width: 100%;
  margin-bottom: 3.5vh;
`;

const Main = styled.main`
  padding: 0 4vw;

  display: flex;
  flex-direction: column;

  margin: 5vh 0;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  // from 2nd child onwards
  p:nth-child(n + 2) {
    margin-top: 0;
  }

  padding-left: 8vw;
`;

const Hello = styled.h1`
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 1.5vh;
`;

const P = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 1vh 0;
`;

const StackTitle = styled.h3`
  margin-top: 7vh;
`;

const TechStack = styled.p`
  line-height: 1.5;
  padding-left: 0.5vw;
`;

const ContactButton = styled.div`
  color: white;
  background-color: black;

  margin-top: 5vh;
  width: 7rem;
  padding: 1.5vh .5vw;
  text-align: center;

  cursor: pointer;
`;

const IndexPage = () => {
  return (
    <Wrapper>

      <Helmet>
        <title>~ matteo muscella ~</title>
      </Helmet>

      <Header>
        <Logo>
          <h1>m</h1>
          <div/>
        </Logo>
      </Header>

      <Main>

        <MainWrapper>

          <Hello>Hi!</Hello>
          <P>My name is Matteo Muscella</P>
          <P>I develop software</P>

          <StackTitle>
            My stack
          </StackTitle>
          <TechStack>
            Java, JavaScript, TypeScript, Spring Boot, React, Redux
          </TechStack>

          <ContactButton>
            Contact me!
          </ContactButton>

        </MainWrapper>

      </Main>

      <Footer>
        &copy; {new Date().getFullYear()} Matteo Muscella
      </Footer>

    </Wrapper>
  )
}

export default IndexPage

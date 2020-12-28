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

const Main = styled.main`
  padding: 0 4vw;

  display: flex;
  flex-direction: column;

  margin-top: 5vh;
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
`;

const ContactButton = styled.div`
  margin-top: 5vh;
  width: 10rem;

  color: black;
  background-color: white;
  padding: 10px;

  border: 1px solid white;

  &:hover {
    border-bottom-color: black;
  }
`;

const IndexPage = () => {
  return (
    <Wrapper>
      <Helmet>
        <title>~ matteo muscella</title>
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

          <ContactButton>Hire me!</ContactButton>
        </MainWrapper>
      </Main>

    </Wrapper>
  )
}

export default IndexPage

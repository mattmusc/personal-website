import * as React from 'react';
import 'typeface-domine';
import styled from 'styled-components';

import './main.css';

const Wrapper = styled.div`
  font-family: Domine, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Header = styled.header`
  padding: 2vh 4vw;
  display: flex;

  justify-content: space-between;
`;

const Main = styled.main`
  padding: 0 4vw;
  display: flex;

  margin-top: 5vh;
`;

const Logo = styled.div`
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

const Intro = styled.div`
  display: flex;
  flex-direction: column;

  transform: translateX(8vw);

  // from 2nd child onwards
  p:nth-child(n + 2) {
    margin-top: 0;
  }
`;

const Hello = styled.h1`
  font-size: 2rem;
  margin-top: 0;
`;

const P = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  margin: 1vh 0;
`;

const IndexPage = () => {
  return (
    <Wrapper>

      <Header>
        <Logo>
          <h1>m</h1>
          <div />
        </Logo>
      </Header>

      <Main>

        <Intro>
          <Hello>Hi!</Hello>
          <P>My name is</P>
          <P>I develop software</P>
        </Intro>

      </Main>

    </Wrapper>
  )
}

export default IndexPage

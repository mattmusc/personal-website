import '@fortawesome/fontawesome-free/css/all.min.css';
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
  min-width: 60px;

  & > h1 {
    margin: 0;
    font-size: max(3rem, 6vw);
  }

  & > div {
    border-left: 2px solid black;
    height: 70%;
    transform: translateY(25%);
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
`;

// const ContactButton = styled.div`
//   & {
//     position: relative;
//     margin-top: 5vh;
//     width: 7rem;
//     height: 1.2rem;
//     padding: 1em 2em;
//     text-align: center;
//     cursor: pointer;
//
//     color: black;
//     border-color: black;
//     border: 1px solid;
//
//     transition: border-color 0.4s, color 0.4s;
//   }
//
//   &:hover {
//     color: white;
//   }
//
//   &:before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: black;
//     z-index: -1;
//     opacity: 0;
//     transform: scale3d(0.7, 1, 1);
//     transition: transform 0.4s, opacity 0.4s;
//     transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
//   }
//
//   &:hover :before {
//     opacity: 1;
//     transform: translate3d(0, 0, 0);
//   }
// `;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2vh;
`;

const SocialLinkItemContainer = styled.div`
  &:not(:first-child) {
    margin-left: 1em;
  }
`;

const SocialLink = styled.a``;

const SocialLinkItem = styled.i`
  font-size: 3em;
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

          <SocialLinks>
            {
              [
                {
                  icon: 'github',
                  link: '',
                }
              ].map(({icon, link}) => (
                <SocialLinkItemContainer>
                  <SocialLink href={link}>
                    <SocialLinkItem
                      className={`fab fa-${icon}`}
                    />
                  </SocialLink>
                </SocialLinkItemContainer>
              ))
            }
          </SocialLinks>

        </MainWrapper>

      </Main>

      <Footer>
        &copy; {new Date().getFullYear()} Matteo Muscella
      </Footer>

    </Wrapper>
  )
}

export default IndexPage

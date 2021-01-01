import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {themes} from '../theme';

import {links} from './data';
import './main.css';

export const Wrapper = styled.div`
  font-family: Domine, "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;

  height: 100vh;

  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.text};
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
    border-left: 2px solid ${props => props.theme.text};
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
  color: ${props => props.theme.accent};
  font-weight: bold;
`;

const TechStack = styled.p`
  line-height: 1.5;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2vh;
`;

const SocialLinkItemContainer = styled.div`
  &:not(:first-child) {
    margin-left: 2em;
  }

  transition: .3s;

  &:hover, &:hover > a {
    transform: scale(1.4, 1.4);
  }
`;

const SocialLink = styled.a`
  color: ${props => props.theme.text};
`;

const SocialLinkItem = styled.i`
  font-size: 2.8em;
`;

const IndexPage = () => {
  const [theme, setTheme] = React.useState(themes.solarizedLight);

  return (
    <ThemeProvider theme={theme}>
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
              Java, JavaScript, TypeScript - Spring Boot, React & Redux.
            </TechStack>

            <SocialLinks>
              {
                links.map(({icon, link}) => (
                  <SocialLinkItemContainer key={icon}>
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
    </ThemeProvider>
  )
}

export default IndexPage

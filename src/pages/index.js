import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {themes} from '../theme';

import {links} from './data';
import './main.css';
import {
  Footer,
  Header,
  Hello,
  Logo,
  Main,
  MainWrapper,
  P,
  SocialLink,
  SocialLinkItem,
  SocialLinkItemContainer,
  SocialLinks,
  StackTitle,
  TechStack,
  Wrapper,
} from './styles';

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

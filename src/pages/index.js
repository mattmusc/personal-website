import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {useLocalStorage} from '../hooks/useLocalStorage';
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
  ToggleDark,
  ToggleLight,
  TogglesContainer,
  Wrapper,
} from './styles';

const IndexPage = () => {
  // persist the theme on local storage with an hook
  const [theme, setTheme] = useLocalStorage('mattmusc:theme', 'light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Wrapper>

        <Helmet>
          <title>~ matteo muscella ~</title>
        </Helmet>

        <Header>
          <Logo>
            <h1>m</h1>
            <div/>
          </Logo>
          <TogglesContainer>
            <ToggleLight
              className="far fa-sun"
              isActive={theme === 'light'}
              onClick={() => setTheme('dark')}
            />
            <ToggleDark
              className="fas fa-moon"
              isActive={theme === 'dark'}
              onClick={() => setTheme('light')}
            />
          </TogglesContainer>
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
          &copy; {new Date().getFullYear()} mattmusc
        </Footer>

      </Wrapper>
    </ThemeProvider>
  )
}

export default IndexPage

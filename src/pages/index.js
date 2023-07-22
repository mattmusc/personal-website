import '@fortawesome/fontawesome-free/css/all.min.css';
import formatDistance from 'date-fns/formatDistance';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {CodePlayground, SocialLinks, ThemeToggle} from '../components/index';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {themes} from '../styles/index';

import '../styles/main.css';

const size = {
  mobileS: '320px',
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
}

const Nav = styled.nav`
  padding: 2vh 4vw;
  height: min(8vh, 15vh);
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media all and ${device.mobileS} {
    height: 8vh;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.grey};
`;

const Main = styled.main`
  //height: 82vh;
  //overflow: hidden;
  padding: 0 4vw;

  @media all and ${device.mobileS} {
    height: 74vh;
  }
`;

const Footer = styled.footer`
  height: 2vh;
  padding: 2vh 4vw 2vh;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.lightGrey};
  font-size: 0.85rem;
`;

const IndexPage = () => {
  const [theme, setTheme] = useLocalStorage('mattmusc:theme', 'light');

  const ys = formatDistance(new Date(2016, 11, 16), new Date());

  return (
    <ThemeProvider theme={themes[theme]}>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>~matteo muscella~</title>
        <style type="text/css">{`
          body {
            background-color: ${themes[theme].bg};
          }
        `}</style>
      </Helmet>

      <Nav>
        <Logo>m</Logo>

        <div>
          <ThemeToggle theme={theme} setTheme={setTheme}/>
        </div>
      </Nav>

      <Main>

        <section>
          <h3 style={{color: `${themes[theme].orange}`, fontStyle: 'italic'}}>#about me</h3>
          <h1 style={{color: `${themes[theme].grey}`, fontSize: '3rem'}}>Hi! 👋</h1>
          <h1 style={{color: `${themes[theme].grey}`}}>I'm Matteo Muscella</h1>
          <p style={{color: `${themes[theme].orange}`}}>I'm a software developer and tech enthusiast.</p>
          <p className="my-desc" style={{color: `${themes[theme].grey}`}}>
            I have {ys} of experience building complete web apps,
            and have built a couple of  mobile apps with Flutter.
          </p>
        </section>

        <section>
          <SocialLinks/>
        </section>

        <section style={{marginTop: '7vh'}}>
          <h3 style={{color: `${themes[theme].green}`, fontStyle: 'italic'}}>#my stack</h3>
          <h2 style={{color: `${themes[theme].grey}`}}>Some of the languages and tools I have used:</h2>
          <p style={{color: `${themes[theme].grey}`}}>Java, JavaScript, TypeScript and Python</p>
          <p style={{color: `${themes[theme].grey}`}}>React & Angular</p>
          <p style={{color: `${themes[theme].grey}`}}>HTML, CSS3</p>
          <p style={{color: `${themes[theme].grey}`}}>Flutter</p>
        </section>

        <div className="animation-loading" style={{color: `${themes[theme].lightGrey}`}}>
          ...loading
        </div>

        <CodePlayground/>

      </Main>

      <Footer>
        &copy; {new Date().getFullYear()} mattmusc
      </Footer>
    </ThemeProvider>
  )
}

export default IndexPage

import '@fortawesome/fontawesome-free/css/all.min.css';
import * as React from 'react';
import {Helmet} from 'react-helmet';
import styled, {ThemeProvider} from 'styled-components';
import 'typeface-domine';

import {useLocalStorage} from '../hooks/useLocalStorage';
import themes from '../styles/index/styles';

import './main.css';

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

  @media ${device.mobileS} {
    height: 8vh;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.grey};
`;

const Main = styled.main`
  height: 81vh;
  overflow: scroll;
  padding: 0 4vw;

  @media ${device.mobileS} {
    height: 74vh;
  }
`;

const Footer = styled.footer`
  height: 2vh;
  padding: 3vh 4vw 2vh;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.lightGrey};
  font-size: 0.85rem;
`;

const RunButton = styled.button`
  background-color: ${props => props.theme.bg};
  border: 1px solid ${props => props.theme.green};
  color: ${props => props.theme.green};
  transition: all .3s;

  &:hover {
    background-color: ${props => props.theme.green};
    border-color: ${props => props.theme.green};
    color: ${props => props.theme.bg};
    cursor: pointer;
  }
`;

const ThemeToggle = ({theme, setTheme}) => (
  <span
    style={{
      color: `${themes[theme].grey}`,
      marginRight: '5px',
      cursor: 'pointer',
    }}
    role="button"
    tabIndex="0"
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    onKeyUp={() => setTheme(theme === 'light' ? 'dark' : 'light')}
  >
    <i className={`fas fa-2x fa-${theme === 'light' ? 'moon' : 'sun'}`}/>
  </span>
);

const IndexPage = () => {
  // persist the theme on local storage with an hook
  const [theme, setTheme] = useLocalStorage('mattmusc:theme', 'light');

  const ys = (new Date().getFullYear()) - 2016;

  const runExample = () => {
    document.getElementById('output').textContent = 'Hello World!';
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        document.getElementById('output').textContent = '';
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('resize', handleResize);
    };
  }, []);

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
          <h1 style={{color: `${themes[theme].grey}`}}>I am Matteo Muscella</h1>
          <p style={{color: `${themes[theme].orange}`}}>A full stack web developer</p>
          <p style={{color: `${themes[theme].grey}`}}>I have {ys} years of experience building complete
            web apps.</p>
        </section>

        <section style={{marginTop: '10vh'}}>
          <h3 style={{color: `${themes[theme].green}`, fontStyle: 'italic'}}>#my stack</h3>
          <h2 style={{color: `${themes[theme].grey}`}}>Some of the languages and tools I have used:</h2>
          <p style={{color: `${themes[theme].grey}`}}>Java, JavaScript, TypeScript and Python</p>
          <p style={{color: `${themes[theme].grey}`}}>React with Redux & Angular</p>
          <p style={{color: `${themes[theme].grey}`}}>HTML, CSS3</p>
        </section>

        <div className="animation-loading" style={{color: `${themes[theme].lightGrey}`}}>
          ...loading
        </div>

        <aside className="code-playground" style={{color: `${themes[theme].lightGrey}`}}>
          <pre>
            <code>{`
              document.getElementById('output').textContent = 'Hello World!';
            `}
            </code>
          </pre>

          <div style={{textAlign: 'right'}}>
            <RunButton role="button" onKeyUp={runExample} onClick={runExample}>
              Run it!
            </RunButton>

            <div id="output" style={{color: `${themes[theme].lightGrey}`}}/>
          </div>
        </aside>

      </Main>

      <Footer>
        &copy; {new Date().getFullYear()} mattmusc
      </Footer>
    </ThemeProvider>
  )
}

export default IndexPage

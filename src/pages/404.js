import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from 'styled-components';

import {useLocalStorage} from '../hooks/useLocalStorage';
import {themes} from '../styles/index';

const ErrorPage = () => {
  // persist the theme on local storage with an hook
  const [theme] = useLocalStorage('mattmusc:theme', 'light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>~oops~</title>
        <style type="text/css">{`
          body {
            background-color: ${themes[theme].bg};
          }
        `}</style>
      </Helmet>

      <div style={{padding: '2rem 4rem'}}>
        <h1 style={{color: `${themes[theme].grey}`}}>
          Looks like there's nothing here...
        </h1>
        <a href="/" style={{ color: themes[theme].blue }}>Go back</a>
      </div>
    </ThemeProvider>
  );
}

export default ErrorPage;

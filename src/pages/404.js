import * as React from 'react';
import {Helmet} from 'react-helmet';
import {ThemeProvider} from 'styled-components';

import {useLocalStorage} from '../hooks/useLocalStorage';
import {themes} from '../theme';

import {Main, MainWrapper, Wrapper} from './styles';

const ErrorPage = () => {
  // persist the theme on local storage with an hook
  const [theme] = useLocalStorage('mattmusc:theme', 'light');
  return (
    <ThemeProvider theme={themes[theme]}>
      <Wrapper>

        <Helmet>
          <title>~ 404: not found ~</title>
        </Helmet>

        <Main>
          <MainWrapper>
            <h1>404: Oh snap!</h1>
            <p>There's nothing here</p>
            <a href="/" style={{ color: themes[theme].text }}>Go back</a>
          </MainWrapper>
        </Main>

      </Wrapper>
    </ThemeProvider>
  );
};

export default ErrorPage;

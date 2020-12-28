import * as React from 'react';

const pageStyles = {
  padding: '96px',
  fontFamily: 'Roboto, -apple-system, sans-serif, serif',
}

const ErrorPage = () => (
  <main style={pageStyles}>
    <title>There's nothing here</title>
    <h1>404</h1>
    <p>Go back <a href="/">home</a></p>
  </main>
);

export default ErrorPage;

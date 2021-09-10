import * as React from 'react';
import styled from 'styled-components';

import {useLocalStorage} from '../../hooks/useLocalStorage';
import {themes} from '../../styles/index';

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

export const CodePlayground = () => {
  const [theme] = useLocalStorage('mattmusc:theme', 'light');

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
  );
};

import * as React from 'react';

import {themes} from '../../styles/index';

export const ThemeToggle = ({theme, setTheme}) => (
  <span
    style={{
      color: `${themes[theme].grey}`,
      marginRight: '5px',
      cursor: 'pointer',
    }}
    role="button"
    tabIndex="0"
    title="Change the theme"
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    onKeyUp={() => setTheme(theme === 'light' ? 'dark' : 'light')}
  >
    <i className={`fas fa-2x fa-${theme === 'light' ? 'moon' : 'sun'}`}/>
  </span>
);

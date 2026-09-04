import * as React from 'react';

export const ThemeToggle = ({theme, setTheme}) => {
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      aria-label={`Switch to ${nextTheme} theme`}
      className="theme-toggle"
      onClick={() => setTheme(nextTheme)}
      title={`Switch to ${nextTheme} theme`}
      type="button"
    >
      <i aria-hidden="true" className={`fas fa-${theme === 'light' ? 'moon' : 'sun'}`}/>
    </button>
  );
};

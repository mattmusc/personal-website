import * as React from 'react';

const commands = {
  about: 'Backend engineer · curious problem solver · tech enthusiast',
  focus: 'Reliable services · software design · product engineering',
  values: 'Clarity · craft · collaboration · continuous learning',
};

export const CodePlayground = () => {
  const [command, setCommand] = React.useState('about');

  return (
    <aside className="terminal" aria-label="Interactive developer profile">
      <div className="terminal-bar" aria-hidden="true">
        <span/><span/><span/>
        <span className="terminal-title">matteo.js</span>
      </div>
      <div className="terminal-body">
        <p><span className="prompt">$</span> matteo.{command}()</p>
        <p className="terminal-output">{commands[command]}</p>
        <div className="terminal-commands" aria-label="Choose a command">
          {Object.keys(commands).map(item => (
            <button
              className={item === command ? 'active' : ''}
              key={item}
              onClick={() => setCommand(item)}
              type="button"
            >
              {item}()
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

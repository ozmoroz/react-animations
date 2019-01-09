import React from 'react';
import ReactDOM from 'react-dom';
import { default as CSSTransitionDemo } from './CSSTransitionDemo';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>CSS Transition demo</h2>
      <p>
        Animate CSS <code>max-width</code> and <code>opacity</code> properties
      </p>
      <CSSTransitionDemo />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

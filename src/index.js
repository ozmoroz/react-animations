import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionDemo from './CSSTransitionDemo';
import TimingFunctionDemo from './TimingFunctionDemo';

import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Animations in React</h1>
      <h2>CSS Transition demo</h2>
      <p>
        Animate CSS <code>max-width</code> and <code>opacity</code> properties
      </p>
      <CSSTransitionDemo />
      <h2>Timing functions</h2>
      <p>
        Animate CSS <code>max-width</code> property with different timing
        functions
      </p>
      <TimingFunctionDemo />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

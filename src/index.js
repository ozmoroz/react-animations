import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionDemo from './CSSTransitionDemo';
import TimingFunctionDemo from './TimingFunctionDemo';

import './styles.css';

function App() {
  return (
    <div className="App container my-4">
      <h1>CSS Transitions in React</h1>
      <p>
        <i>
          Change the values in the boxes below and click Open/Close button to
          see the effect
        </i>
      </p>
      <h2>Animating multiple properties</h2>
      <p>
        Animate CSS <code>max-width</code> and <code>opacity</code> properties
      </p>
      <CSSTransitionDemo />
      <h2>Timing functions demo</h2>
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

import React from 'react';
import ReactDOM from 'react-dom';
import { default as CSSTransitionDemo } from './CSSTransitionDemo';

import './styles.css';

function App() {
  return (
    <div className="App">
      <CSSTransitionDemo />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

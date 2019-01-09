// CSS Transitions demo

import * as React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { ReactComponent as SearchIcon } from './search.svg';
// import './styles.css';

class Search extends React.Component {
  state = {
    opened: false // Initially search form is Closed
  };

  render() {
    return (
      <div className="search-form">
        <input type="text" />
        <button type="button">
          <SearchIcon className="search-icon" />
        </button>
      </div>
    );
  }
}

export default Search;

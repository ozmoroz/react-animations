// CSS Transitions demo

import * as React from 'react';
import ReactDOM from 'react-dom';
// import './styles.css';

/* This CSS style is applied when the drawer is opening and opened*/
const openingStyle = {
  maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
  opacity: 1 /* opened drawer is opaque */,
  /* Upon transitioning to Open,
     animate `max-width' for 0.5s
     and 'opacity' for 0.2s*/
  transition: 'max-width 0.5s, opacity 0.2s'
};

/* This CSS style is applied when the drawer is closing and closed */
const closingStyle = {
  maxWidth: 0 /* max-width is 0 in the closed drawer */,
  opacity: 0 /* closed drawer is transparent */,
  /* Upon transitioning Closed to Open,
     animate `max-width' for 0.5s
     and 'opacity' for 0.2s  with 0.3s delay */
  transition: 'max-width 0.5s, opacity 0.2s 0.3s'
};

class Search extends React.Component {
  state = {
    opened: false // Initially search form is Closed
  };

  toggleOpened = () =>
    // Toggle opened / closed state.
    // Because we rely on the previous state, we need to use a function setState form
    // https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/
    this.setState(state => ({ ...state, opened: !state.opened }));

  render() {
    const { opened } = this.state;
    return (
      <div className="drawer-form col-12 col-md-4">
        <input
          type="text"
          className="form__input"
          // Apply 'openingStyle' CSS class if the drawer is opened,
          // and 'closingStyle' if the drawer is closed.
          style={opened ? openingStyle : closingStyle}
        />
        <button
          type="button"
          className="form__button btn btn-primary"
          onClick={this.toggleOpened}
        >
          {opened ? 'Close' : 'Open'}
        </button>
      </div>
    );
  }
}

export default Search;

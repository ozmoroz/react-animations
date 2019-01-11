// CSS Transitions demo

import * as React from 'react';

/* This CSS style is applied when the drawer is opening and opened */
const openedStyle = {
  maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
  /* Upon transitioning to Open,
     animate `max-width' for 0.5sv*/
  transition: 'max-width 0.5s'
};

/* This CSS style is applied when the drawer is closing and closed */
const closedStyle = {
  maxWidth: 0 /* max-width is 0 in the closed drawer */,
  /* Upon transitioning to Closed,
     animate `max-width' for 0.5s */
  transition: 'max-width 0.5s'
};

class Drawer extends React.Component {
  state = {
    opened: false // Initially search form is Closed
  };

  toggleOpened = () =>
    // Toggle opened / closed state.
    // Because we rely on the previous state, we need to use a functional setState form
    // https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/
    this.setState(state => ({ ...state, opened: !state.opened }));

  render() {
    const { opened } = this.state;
    return (
      <div className="drawer-container col-12 col-md-4">
        <input
          type="text"
          className="drawer"
          // Apply 'openedStyle' CSS class if the drawer is opened,
          // and 'closedStyle' if the drawer is closed.
          style={opened ? openedStyle : closedStyle}
        />
        <button
          type="button"
          className="open-close-button btn btn-primary"
          onClick={this.toggleOpened}
        >
          {opened ? 'Close' : 'Open'}
        </button>
      </div>
    );
  }
}

export default Drawer;

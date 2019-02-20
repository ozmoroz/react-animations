// CSS Transitions demo

import * as React from 'react';

class CSSTransitionDemo extends React.Component {
  state = {
    opened: false, // Initially search form is Closed
    /* Upon transitioning to Open,
     animate `max-width' for 0.5s
     and 'opacity' for 0.2s*/
    openingTransition: 'max-width 0.5s, opacity 0.2s',
    /* Upon transitioning to Closed,
     animate `max-width' for 0.5s
     and 'opacity' for 0.2s  with 0.3s delay */
    closingTransition: 'max-width 0.5s, opacity 0.2s 0.3s'
  };

  // Handle onChange event of the opening transition input element
  handleOpeningTransitionChange = ev =>
    this.setState({ openingTransition: ev.currentTarget.value });

  // Handle onChange event of the closing transition input element
  handleClosingTransitionChange = ev =>
    this.setState({ closingTransition: ev.currentTarget.value });

  toggleOpened = () =>
    // Toggle opened / closed state.
    // Because we rely on the previous state, we need to use a functional setState form
    // https://ozmoroz.com/2018/11/why-my-setstate-doesnt-work/
    this.setState(state => ({ ...state, opened: !state.opened }));

  render() {
    const { opened, openingTransition, closingTransition } = this.state;

    /* This CSS style is applied when the drawer is opening and opened */
    const openedStyle = {
      maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
      opacity: 1 /* opened drawer is opaque */,
      transition: openingTransition
    };

    /* This CSS style is applied when the drawer is closing and closed */
    const closedStyle = {
      maxWidth: 0 /* max-width is 0 in the closed drawer */,
      opacity: 0 /* closed drawer is transparent */,
      transition: closingTransition
    };

    return (
      <div className="mb-4">
        <div className="row">
          <div className="col-12 col-sm-6 form-group">
            <label for="opening-transition-input">Opening transition</label>
            <input
              id="opening-transition-input"
              className="form-control"
              style={{ textAlign: 'right' }}
              value={openingTransition}
              onChange={this.handleOpeningTransitionChange}
            />
          </div>
          <div className="col-12 col-sm-6 form-group">
            <label for="closing-transition-input">Closing transition</label>
            <input
              id="closing-transition-input"
              className="form-control"
              style={{ textAlign: 'right' }}
              value={closingTransition}
              onChange={this.handleClosingTransitionChange}
            />
          </div>
        </div>
        <div className="drawer-container col-12 col-md-6 mb-3">
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
      </div>
    );
  }
}

export default CSSTransitionDemo;

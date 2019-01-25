// CSS Transitions demo

import * as React from 'react';

const duration = '4s';
const timingFunctions = ['linear', 'ease', 'ease-in-out'];

const Drawer = props => {
  const { opened, duration, timingFunction } = props;

  /* This CSS style is applied when the drawer is opening and opened */
  const openedStyle = {
    maxWidth: '100%' /* max-with is 100% when the drawer is opened */,
    /* Upon transitioning to Open,
      animate 'max-width' for 'duration' period
      with 'timingFunction` timing function */
    transition: `max-width ${duration} ${timingFunction}`
  };

  /* This CSS style is applied when the drawer is closing and closed */
  const closedStyle = {
    maxWidth: 0 /* max-width is 0 in the closed drawer */,
    /* Upon transitioning to Closed,
       animate 'max-width' for 'duration' period
      with 'timingFunction` timing function */
    transition: `max-width ${duration} ${timingFunction}`
  };
  return (
    <div className="row">
      <div className="col-12 col-md-2 d-flex">{timingFunction}</div>
      <div className="col-12 col-md-10 d-flex mb-1">
        <input
          type="text"
          className="drawer"
          // Apply 'openedStyle' CSS class if the drawer is opened,
          // and 'closedStyle' if the drawer is closed.
          style={opened ? openedStyle : closedStyle}
        />
      </div>
    </div>
  );
};

class TimingFunctionDemo extends React.Component {
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
      <>
        <div className="row mb-3">
          <div className="col">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.toggleOpened}
            >
              {opened ? 'Close' : 'Open'}
            </button>
          </div>
        </div>
        {timingFunctions.map(timingFunction => (
          <Drawer
            key={timingFunction}
            opened={opened}
            duration={duration}
            timingFunction={timingFunction}
          />
        ))}
      </>
    );
  }
}

export default TimingFunctionDemo;

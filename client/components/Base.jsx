import React from 'react';
import Navigation from './Navigation.jsx';

export default class Base extends React.Component {
  render() {

    let style = {
      background: '#cccccc url("../images/ny-filtered.jpg") no-repeat fixed 50%',
      height: "100vh"
    }

    return (
      <div style={style}>
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
}

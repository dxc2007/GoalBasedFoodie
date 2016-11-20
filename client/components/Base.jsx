import React from 'react';
import Navigation from './Navigation.jsx';

export default class Base extends React.Component {
  render() {

    return (
      <div id="app">
        <Navigation/>
        {this.props.children}
      </div>
    )
  }
}

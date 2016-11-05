import React from 'react';
import Base from './components/Base.jsx';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Jumbo from './components/Jumbo.jsx';
import AppMain from './components/AppMain.jsx';
import Map from './components/Map.jsx';

export default class App extends React.Component {
  render() {
    return (
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <IndexRoute component={AppMain} />
                    <Route path="/map" component={Map} />
                    <Route path="/jumbo" component={Jumbo} />
                </Route>
            </Router>
    )
  }
}

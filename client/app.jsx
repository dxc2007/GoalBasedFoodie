import React from 'react';
import Base from './components/Base.jsx';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import Homepage from './components/Homepage.jsx';
import AppHomepage from './components/AppHomepage.jsx';
import AppMain from './components/AppMain.jsx';
import Choice from './components/Choice.jsx';
import QfType from './components/quickfix/Type.jsx';
import QfDistance from './components/quickfix/Distance.jsx';
import QfPrice from './components/quickfix/Price.jsx';
import QfResults from './components/quickfix/Results.jsx';
import PUType from './components/plan/Type.jsx';
import PUSearch from './components/plan/Search.jsx';
import PUResults from './components/plan/Results.jsx';

import { Provider } from 'react-redux'
import store from "./store"

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <Route component={AppHomepage} >
                        <IndexRoute component={Homepage} />
                    </Route>
                    <Route component={AppMain} >
                    <Route path="choice" component={Choice} />
                    <Route path="quickfix" >
                        <IndexRoute component={QfType}/>
                        <Route path="distance" component={QfDistance} />
                        <Route path="price" component={QfPrice} />
                        <Route path="results" component={QfResults} />
                    </Route>
                    <Route path="plan" >
                        <IndexRoute component={PUType}/>
                        <Route path="search" component={PUSearch} />
                        <Route path="results" component={PUResults} />
                    </Route>
                    </Route>
                </Route>
            </Router>
        </Provider>
    )
  }
}

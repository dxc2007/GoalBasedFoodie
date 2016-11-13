import React from 'react';
import Base from './components/Base.jsx';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Jumbo from './components/Experimental Features/Jumbo.jsx';
import AppMain from './components/AppMain.jsx';
import Choice from './components/Choice.jsx';
import QfType from './components/quickfix/Type.jsx';
import QfDistance from './components/quickfix/Distance.jsx';
import QfPrice from './components/quickfix/Price.jsx';
import QfResults from './components/quickfix/Results.jsx';
import PChoice from './components/plan/Choice.jsx';
import PUType from './components/plan/upload/Type.jsx';
import PUSearch from './components/plan/upload/Search.jsx';
import PUResults from './components/plan/upload/Results.jsx';

import PDType from './components/plan/decide/Type.jsx';
import PDResults from './components/plan/decide/Results.jsx';
import PDDistance from './components/plan/decide/Distance.jsx';
import PDrice from './components/plan/decide/Price.jsx';

import { Provider } from 'react-redux'
import store from "./store"

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <IndexRoute component={AppMain} />
                    <Route path="/choice" component={Choice} />
                    <Route path="/jumbo" component={Jumbo} />
                    <Route path="/quickfix" >
                        <IndexRoute component={QfType}/>
                        <Route path="/distance" component={QfDistance} />
                        <Route path="/price" component={QfPrice} />
                        <Route path="/results" component={QfResults} />
                    </Route>
                    <Route path="/plan" component={PChoice}>
                    </Route>
                        <Route path="/upload">
                            <IndexRoute component={PUType}/>
                            <Route path="/search" component={PUSearch} />
                            <Route path="/results" component={PUResults} />
                        </Route>
                        <Route path="/decide">
                        </Route>
                </Route>
            </Router>
        </Provider>
    )
  }
}

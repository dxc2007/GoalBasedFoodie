import React from 'react';
import Base from './components/Base.jsx';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Jumbo from './components/Jumbo.jsx';
import AppMain from './components/AppMain.jsx';
import Map from './components/Map.jsx';
import QfType from './components/quickfix/Type.jsx';
import QfDistance from './components/quickfix/Distance.jsx';
import QfPrice from './components/quickfix/Price.jsx';
import QfResults from './components/quickfix/Results.jsx';
// import PChoice from './components/plan/Type.jsx';
// import PType from './components/plan/Type.jsx';
// import PDistance from './components/plan/Distance.jsx';
// import PPrice from './components/plan/Price.jsx';
// import PResults from './components/plan/search.jsx';

export default class App extends React.Component {
  render() {
    return (
            <Router history={browserHistory}>
                <Route path="/" component={Base}>
                    <IndexRoute component={AppMain} />
                    <Route path="/map" component={Map} />
                    <Route path="/jumbo" component={Jumbo} />
                    <Route path="/quickfix" >
                        <IndexRoute component={QfType}/>
                        <Route path="/distance" component={QfDistance} />
                        <Route path="/price" component={QfPrice} />
                        <Route path="/results" component={QfResults} />
                    </Route>
                    <Route path="/plan" >
                        <Route path="/upload">


                        </Route>
                        <Route path="/decide">

                        </Route>
                    </Route>
                </Route>
            </Router>
    )
  }
}

import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import reducers from './client/reducers'
import Routes from './client/routes.jsx'

const initialState = window.__REDUX_STATE__;
const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));

require('./public/css/style.scss');

// Pick up any initial state sent by the server
syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
        <Routes store={store} />
    </Provider>
), document.getElementById('root'));
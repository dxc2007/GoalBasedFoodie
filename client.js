import React from 'react';
import ReactDOM from 'react-dom';
import App from "./client/app.jsx";

import {Provider} from 'react-redux';
import store from './client/store.js';

ReactDOM.render(<App />, document.getElementById('react-app'))

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./client/app.jsx";

require('./public/css/style.scss');

ReactDOM.render(<App />, document.getElementById('react-app'));
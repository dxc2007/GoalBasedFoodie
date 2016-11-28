import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import reducers from './client/reducers'
import routes from './client/routes.jsx'

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("./public"));

//routes
const calendarRoutes = require("./routes/calendar");
app.use('/calendar', calendarRoutes);

//handle react routes
app.get('*', (req, res, next) => {
  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {

    if (err) return next(err)

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    // Get the component tree
    if (!renderProps) {
      return next(new Error('Missing render props'))
    }

    const components = renderProps.components

    // If the component being shown is our 404 component, then set appropriate status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404)
    }

// Extract our page component
    const Comp = components[components.length - 1].WrappedComponent;

// Extract `fetchData` if exists
    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve());

    const initialState = {};
// Note our thunk middleware for async actions
    const store = createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
    const { location, params, history } = renderProps;

// Call fetchData, passing it some useful things it might need
    fetchData({ store, location, params, history })
        .then(() => {
          const body = renderToString(
              <Provider store={store}>
                  <RouterContext {...renderProps} />
              </Provider>
          )

          // Grab the state, for inflating on the client side
          const state = store.getState();

          // Wrap the body in your HTMLs
          res.send(`<!DOCTYPE html>
      <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Foodie App (Beta)</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css?family=Droid+Sans" rel="stylesheet">
            <link rel="stylesheet" href="./public/css/style.css">
        </head>
        <body>
          <div id="root">${body}</div>
          <script>window.__REDUX_STATE__ = ${JSON.stringify(state)}</script>
          <script src="/bundle.js"></script>
        </body>
        <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfLBv6rrMMjhiKtteq_Dw4AjGbVveB0Vw&libraries=places"></script>
        <script type="text/javascript" src="https://apis.google.com/js/client.js"></script>
      </html>`)
        })
        .catch((err) => next(err))
  })
});


const server = app.listen(port, () => {
  console.log("Pirates on Deck", server.address());
});
// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import hogwartsApp from 'app/reducers'

// Internal components
import styles from 'styles/main';
import HouseContainer from 'app/components/HouseContainer';

// Initialise the Redux Store (with or without DevTools)
let store;
let middleware = applyMiddleware(thunkMiddleware);
if (__PRODUCTION__) {
  store = createStore(hogwartsApp, middleware);
} else {
  let devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  store = createStore(hogwartsApp, compose(middleware, devtools));
}

// Initialise React
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { houseNames: ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]};
  }

  render() {
    return (
      <Router>
        <Route path="/app" render={props => <HouseContainer houseNames={this.state.houseNames} {...props}/>} />
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);


// Initialise the Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(reg) {
    console.log('◕‿◕', reg);
  }, function(err) {
    console.log('ಠ_ಠ', err);
  });
}


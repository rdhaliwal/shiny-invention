// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import hogwartsApp from 'app/reducers'

// Internal components
import styles from 'styles/main';
import HouseContainer from 'app/components/HouseContainer';

// Initialise the Redux Store
let store = createStore(hogwartsApp)

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


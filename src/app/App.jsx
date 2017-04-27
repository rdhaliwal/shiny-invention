import React from 'react';
import ReactDOM from 'react-dom';
import HouseContainer from 'app/HouseContainer';
import styles from 'styles/main';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { houseNames: ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff", "Thing"]};
  }

  render() {
    return (
      <Router>
        <Route path="/app">
          <div>
            <h1>Housez of Hogwarts</h1>
            <HouseContainer houseNames={this.state.houseNames} />
          </div>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

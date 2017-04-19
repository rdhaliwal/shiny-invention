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

    this.state = { houseNames: ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]};
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Houses of Hogwarts</h1>
          <HouseContainer houseNames={this.state.houseNames} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

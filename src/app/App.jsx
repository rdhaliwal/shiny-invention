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
        <Route path="/app" render={props => <HouseContainer houseNames={this.state.houseNames} {...props}/>} />
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);

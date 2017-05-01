import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import styles from 'styles/main';
import HouseContainer from 'app/components/HouseContainer';

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

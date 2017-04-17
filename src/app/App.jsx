import React from 'react';
import ReactDOM from 'react-dom';
import HouseContainer from 'app/HouseContainer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Houses of Hogwarts</h1>
        <HouseContainer />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

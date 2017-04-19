import React from 'react';
import House from 'app/House';
import Dog from 'assets/space-dog.gif';
import {
  Route,
  Link
} from 'react-router-dom'

export default class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // See:
  // <Route path={`/${h.toLowerCase()}`} component={House/>} />
  // https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202
  // http://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  render() {
    let body = [];
    body = this.props.houseNames.map(h =>
      <div key={h.toLowerCase()}>
        <Link to={`/${h.toLowerCase()}`}>{h}</Link>
        <Route path={`/${h.toLowerCase()}`} render={props => <House name={h} {...props}/>} />
      </div>
    );

    return (
      <div className="HouseContainer">
        <img src={Dog} alt="I have no idea what I'm doing"/>
        {body}
        <div>
          <Link to="/default">Default</Link>
          <Route path="/default" render={props => <House {...props}/>} />
        </div>
      </div>
    );
  }
}


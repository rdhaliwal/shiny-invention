import React from 'react';
import House from 'app/House';
import {
  Route,
  Link
} from 'react-router-dom'

import HogwartsLogo from 'assets/hogwarts-logo.jpg';

export default class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  // See:
  // <Route path={`/${h.toLowerCase()}`} component={House/>} />
  // https://github.com/ReactTraining/react-router/issues/4105#issuecomment-289195202
  // http://stackoverflow.com/questions/22876978/loop-inside-react-jsx
  render() {
    let tabbar = [],
        body   = [];
    tabbar = this.props.houseNames.map(h =>
      <div className={`HouseContainer-tab HouseContainer-tab--${h.toLowerCase()}`}
           key={h.toLowerCase()}>
        <Link to={`/app/${h.toLowerCase()}`}>{h}</Link>
      </div>
    );
    tabbar.push(<div className="HouseContainer-tab" key="default">
      <Link to="/app/default">Default</Link>
    </div>
    );
    body = this.props.houseNames.map(h => <Route path={`/app/${h.toLowerCase()}`} render={props => <House name={h} {...props}/>} key={h.toLowerCase()}/> );
    body.push(<Route path="/app/default" render={props => <House {...props}/>} key="default"/> );

    return (
      <div className="HouseContainer">
        <div className="HouseContainer-header">
          <h1 className="HouseContainer-heading">Hogwarts School of Witchcraft and Wizadry</h1>
          <img src={HogwartsLogo} alt="Hogwarts" className="HouseContainer-logo"/>
        </div>
        <div className="HouseContainer-tabbar">
          {tabbar}
        </div>
        <div className="HouseContainer-viewContainer">
          {body}
        </div>
      </div>
    );
  }
}

// HouseContainer.defaultProps = {
//   houseNames: []
// }

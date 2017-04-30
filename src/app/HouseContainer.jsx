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

  render() {
    let tabbar = [];
    tabbar = this.props.houseNames.map(h =>
      <div className={`HouseContainer-tab HouseContainer-tab--${h.toLowerCase()}`}
           key={h.toLowerCase()}>
        <Link to={`/app/${h.toLowerCase()}`} className={true ? 'is-selected' : ''}>
          {h}
        </Link>
      </div>
    );

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
          <Route path={`${this.props.match.url}/:houseName`} component={House}/>
        </div>
      </div>
    );
  }
}

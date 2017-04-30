import React from 'react';
import House from 'app/House';
import {
  Route,
  Link
} from 'react-router-dom'

import HogwartsLogo from 'assets/hogwarts-logo.jpg';

const TabBar = function(houseNames) {
  let bar = houseNames.map(house =>
    <div className={`HouseContainer-tab HouseContainer-tab--${house.toLowerCase()}`}
         key={house.toLowerCase()}>
      <Link to={`/app/${house.toLowerCase()}`} className={true ? 'is-selected' : ''}>
        {house}
      </Link>
    </div>
  );

  bar.push(<div className="HouseContainer-tab" key="default">
    <Link to="/app/default">Default</Link>
  </div>);

  return bar;
};

export default class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HouseContainer">
        <div className="HouseContainer-header">
          <h1 className="HouseContainer-heading">Hogwarts School of Witchcraft and Wizadry</h1>
          <img src={HogwartsLogo} alt="Hogwarts" className="HouseContainer-logo"/>
        </div>
        <div className="HouseContainer-tabbar">
          {TabBar(this.props.houseNames)}
        </div>
        <div className="HouseContainer-viewContainer">
          <Route path={`${this.props.match.url}/:houseName`} component={House}/>
        </div>
      </div>
    );
  }
}

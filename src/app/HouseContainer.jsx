import React from 'react';
import House from 'app/House';

export default class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HouseContainer">
        <House name="Gryffindor"/>
        <House name="Ravenclaw"/>
        <House name="Slytherin"/>
        <House name="Hufflepuff"/>
      </div>
    );
  }
}


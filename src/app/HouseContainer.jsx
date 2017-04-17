import React from 'react';
import House from 'app/House';
import Dog from 'assets/space-dog.gif';

export default class HouseContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HouseContainer">
        <img src={Dog} alt="I have no idea what I'm doing"/>
        <House name="Gryffindor"/>
        <House name="Ravenclaw"/>
        <House name="Slytherin"/>
        <House name="Hufflepuff"/>
      </div>
    );
  }
}


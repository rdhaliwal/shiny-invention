import React from 'react';

export default class House extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h2 className="House">
        {this.props.name}
      </h2>
    );
  }
}

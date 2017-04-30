import React from 'react';

export default class House extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`House House--${this.props.name.toLowerCase()}`}>
        <h2 className="House-name">
          {this.props.name}
        </h2>
        <div className="House-logo"></div>
      </div>
    );
  }
}

House.defaultProps = {
  name: "No House"
}

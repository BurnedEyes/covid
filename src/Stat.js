import React from 'react';
import './Stat.css';

class Stat extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className='Box'>{this.props.name} <h2> {this.props.number} </h2></div>
);
  }

}

export default Stat;

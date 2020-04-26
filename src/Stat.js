import React from 'react';
import './Stat.css';

class Stat extends React.Component {

  render() {
    return (
      <div className='Box'>{this.props.name} <h2> {this.props.number} </h2></div>
    );
  }

}

export default Stat;

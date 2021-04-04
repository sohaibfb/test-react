import React, { Component } from 'react';
import './style.css';

class Iframe extends Component {
    render() {
        return (
            
  <iframe src={this.props.source} title="bodydata" onLoad={this.props.source} className="bodydata" name='mainshow'>  </iframe>
 

        );
    }
}

export default Iframe;

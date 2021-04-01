import React, { Component } from 'react';
import './style.css';

class Iframe extends Component {
    render() {
        return (
            <div>
  <iframe src={this.props.source} title="bodydata" onLoad={this.props.source} className="bodydata"> </iframe>
</div>

        );
    }
}

export default Iframe;

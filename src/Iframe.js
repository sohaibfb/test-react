import React, { Component } from 'react';
import './style.css';
import LandingPage from './LandingPage';

class Iframe extends Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.state = {frame: <LandingPage/>};
  }

  handleChange(e) {
    this.setState({frame: e.target.value});
  }
    render() {
        return (
            
      <div>{this.state.frame}</div>
 

        );
    }
}

export default Iframe;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Pane extends Component {
  displayName = 'Pane';

  propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  componentDidMount() {
    console.log('Pane componentDidMount');
    // this.setState({colorList: Data.getColors() });
  }

  componentWillUnmount() {
    console.log('Pane componentWillUnmount');
  }  

  render () {
  	return (
    	<div> {this.props.children} </div>
    );
  }

}
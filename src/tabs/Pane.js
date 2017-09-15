import React, { Component } from 'react';

export class Pane extends Component {
  displayName = 'Pane';

  propTypes = {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
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
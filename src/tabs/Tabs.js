import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ]).isRequired
}

export class Tabs extends React.Component {
    displayName = 'Tabs';


    constructor(props, context) {
        super(props, context);
        this.state = { selected: 0};
        
    }
    componentDidMount() {
        console.log('Tabs componentDidMount');
    // this.setState({colorList: Data.getColors() });
    }

    componentWillUnmount() {
        console.log('Tabs componentWillUnmount');
    }  
    
    getDefaultProps () {
        return {
            selected: 0
        };
    }

    getInitialState () {
        return {
            selected: this.props.selected
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }

    handleClick (index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    }

    _renderTitles () {
        let labels = (child, index) => {
            var activeClass = (this.state.selected === index ? 'active' : '');
            return (
                <li key={index}>
                    <a href="#" 
                        className={activeClass}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
             );
        }
        return (
            <ul className="tabs__labels">
            {this.props.children.map(labels.bind(this))}
            </ul>
        );
    }
    _renderContent() {
        return (
            <div className="tabs__content">
                {this.props.children[this.state.selected]}
            </div>
        );
    }
    render () {
        return (
            <div className="tabs">
            {this._renderTitles()}
            {this._renderContent()}
        </div>
        );
    }


}


// var Tabs = React.createClass({
// 	displayName: 'Tabs',
// 	propTypes: {
//     selected: React.PropTypes.number,
//     children: React.PropTypes.oneOfType([
//       React.PropTypes.array,
//       React.PropTypes.element
//     ]).isRequired
//   },
//   getDefaultProps: function () {
//   	return {
//     	selected: 0
//     };
//   },
//   getInitialState: function () {
//     return {
//     	selected: this.props.selected
//     };
//   },
//   shouldComponentUpdate(nextProps, nextState) {
//   	return this.props !== nextProps || this.state !== nextState;
//   },
//   handleClick: function (index, event) {
//   	event.preventDefault();
//     this.setState({
//     	selected: index
//     });
//   },
//   _renderTitles: function () {
//   	function labels(child, index) {
//     	var activeClass = (this.state.selected === index ? 'active' : '');
//     	return (
//       	<li key={index}>
//         	<a href="#" 
//           	className={activeClass}
//           	onClick={this.handleClick.bind(this, index)}>
//           	{child.props.label}
//           </a>
//         </li>
//       );
//     }
//   	return (
//     	<ul className="tabs__labels">
//       	{this.props.children.map(labels.bind(this))}
//       </ul>
//     );
//   },
//   _renderContent: function () {
//   	return (
//     	<div className="tabs__content">
// 	    	{this.props.children[this.state.selected]}
//       </div>
//     );
//   },
// 	render: function () {
//   	return (
//     	<div className="tabs">
//         {this._renderTitles()}
//       	{this._renderContent()}
//       </div>
//     );
//   }
// });

// var Pane = React.createClass({
// 	displayName: 'Pane',
//   propTypes: {
//     label: React.PropTypes.string.isRequired,
//     children: React.PropTypes.element.isRequired
//   },
// 	render: function () {
//   	return (
//     	<div>
//       	{this.props.children}
//       </div>
//     );
//   }
// });

// var App = React.createClass({
// 	render: function () {
//   	return (
//     	<div>
//         <Tabs selected={0}>
//           <Pane label="Tab 1">
//             <div>This is my tab 1 contents!</div>
//           </Pane>
//           <Pane label="Tab 2">
//             <div>This is my tab 2 contents!</div>
//           </Pane>
//           <Pane label="Tab 3">
//             <div>This is my tab 3 contents!</div>
//           </Pane>
//         </Tabs>
//       </div>
//     );
//   }
// });
 
// ReactDOM.render(<App />, document.querySelector('.container'));
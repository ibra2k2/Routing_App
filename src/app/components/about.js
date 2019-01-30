import React from 'react';
import ReactDOM from 'react-dom';




export class About extends React.Component {

	render(){
		return(
			<div className="header">
			 <h5>About</h5>
			 <p>User Information Details:{this.props.match.params.id}</p>
			</div>
		);
	}
} 
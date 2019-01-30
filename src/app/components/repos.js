import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, browserHistory } from 'react-router-dom';
import 'whatwg-fetch';


export class Repos extends React.Component {
	constructor(){
		super(...arguments);
		this.state={
			repositories: [],
		};
	}
	componentDidMount(){
		fetch('https://api.github.com/users/pro-react/repos')
		.then((response)=> {
			if(response.ok){
				return response.json();
			}else {
				throw new Error("Server response wasn't OK");
			}
		})
		.then((responseData)=>{
			this.setState({repositories: responseData});
		});
	}
	onBackHome=()=>{
		this.props.history.push("/");
	}
	render(){
		const repos = this.state.repositories.map((repo)=>(
			<li key={repo.id}>
			<Link to ={"/repos/"+repo.name}>{repo.name}</Link>
			</li>
		));
		return(
			<div className="header">
			 <h5>Github Repos</h5>
			 <ul>{repos}</ul>
			<button onClick={this.onBackHome} className='btn btn-primary'>Go Back!!</button>
			</div>	
		);
	}
} 
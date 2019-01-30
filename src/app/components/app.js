import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import { About } from './about';
import { Home } from './home';
import { Repos } from './repos';


export class App extends React.Component {

    
	render(){
		return(
            <Router history={browserHistory}>
            <div className='container'>
            <header className='footer'>Routing App</header>
              <menu className='menu'>
                <Link to='/home'>Home</Link>
                <Link to='/about/10'>About</Link>
                <Link to='/repos'>Repos</Link>
              </menu>
              {/*<Route  path="/" component={Home} />*/}
          <Route path="/home" component={Home} /> 
		      <Route path="/about/:id" component={About} />
		      <Route path="/repos" component={Repos} />
		    </div>  
		    </Router>  
			);
	}
}
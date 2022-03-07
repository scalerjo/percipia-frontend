import { Component  } from 'react'

import './App.css';
import Header from './Header';
import List from './List';

class App extends Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className="appContainer">
				<Header />
				<List />
			</div>
		);
	}
}

export default App;

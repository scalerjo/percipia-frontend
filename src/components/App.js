import { Component  } from 'react'

import './App.css';
import Header from './Header';

class App extends Component {
	constructor(){
		super();
	}

	render(){
		return (
			<div className="appContainer">
				<Header />
			</div>
		);
	}
}

export default App;

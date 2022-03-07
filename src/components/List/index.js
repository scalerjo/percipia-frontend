import { Component  } from 'react'

import './index.css';
import Item from "../Item";
import axios from 'axios';


// List of TODO objects
class List extends Component {
	constructor() {
        super();

        this.state = {
            todoList: []
        }
	}

    // Fetch current TODO List
    componentDidMount() {
        axios.get("/api/todo").then(function(response) {
            this.setState({todoList: (response.data == null) ? [] : response.data});
        }.bind(this))
    }

	render(){
		return (
			<div className="listContainer">
				{this.state.todoList.map(function(TODO) {
                    return <Item key={TODO.ID} ID={TODO.ID} text={TODO.Text} time={TODO.Time} />
                })}
			</div>
		);
	}
}

export default List;

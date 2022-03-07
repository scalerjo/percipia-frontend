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
        axios.get("http://192.168.1.111/api/todo").then(function(response) {
            var res = (response.data == null) ? [] : response.data;
            res.sort(function(a, b) {
                return b.Time - a.Time
            })
            this.setState({todoList: res});
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

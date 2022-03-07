import { Component  } from 'react'

import './index.css';
import Item from "../Item";
import axios from 'axios';


class List extends Component {
	constructor() {
        super();

        this.state = {
            todoList: []
        }
	}

    componentDidMount() {
        axios.get("/api/todo").then(function(response) {
            this.setState({todoList: response.data});
        }.bind(this))
    }

	render(){
		return (
			<div className="listContainer">
				{this.state.todoList.map(function(TODO) {
                    return <Item key={TODO.ID} text={TODO.Text} time={TODO.Time} />
                })}
			</div>
		);
	}
}

export default List;

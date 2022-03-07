import { Component  } from 'react'

import './index.css';
import Item from "../Item";


class List extends Component {
	constructor() {
        super();

        this.state = {
            todoList: []
        }
	}

    componentDidMount() {
        // TODO change temp list to fetch request
        const list = [
            {
                id: 1,
                text: "Take out the garbage",
                time: 1646623153940
            },
            {
                id: 2,
                text: "Clean the dishes",
                time: 1646623153940
            }
        ]
        this.setState({todoList: list});
    }

	render(){
		return (
			<div className="listContainer">
				{this.state.todoList.map(function(TODO) {
                    return <Item id={TODO.id} text={TODO.text} time={TODO.time} />
                })}
			</div>
		);
	}
}

export default List;

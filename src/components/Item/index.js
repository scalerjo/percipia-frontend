import { Component  } from 'react'

import './index.css';
import EditButton from '../EditButton';
import DeleteButton from '../DeleteButton';

import EditDialog from '../EditDialog';

class Item extends Component {
	constructor(props) {
        super();

		this.props = props

		this.state = {
			openEdit: false
		}
	}

	handleClickOpenEdit() {
        this.setState({ openEdit: true });
    }

    handleCloseEdit() {
        this.setState({ openEdit: false });
    }

	handleDelete() {
		
	}

	convertMS(ms) {
		var rawDate = new Date(ms);
		return rawDate.toLocaleDateString() + " " + rawDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
	}

	render(){
		return (
			<div className="item">
				<div className="content">
					<div className="time">
						{this.convertMS(this.props.time)}
					</div>
					<div className="text">
						{this.props.text}
					</div>
				</div>
				<div className="actionsContainer">
					<div className="action"><EditButton onClick={this.handleClickOpenEdit.bind(this)}/></div>
					<div className="action"><DeleteButton onClick={this.handleDelete.bind(this)}/></div>
				</div>
				<div>
					<EditDialog onClose={this.handleCloseEdit.bind(this)} open={this.state.openEdit} default={this.props.text}/>
				</div>
			</div>
		);
	}
}

export default Item;

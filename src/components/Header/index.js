import { Component  } from 'react'

import './index.css';
import NewButton from '../NewButton';
import AddDialog from "../AddDialog";

class Header extends Component {
	constructor() {
        super();

		this.state = {
            open: false
        }
	}

	handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

	render(){
		return (
			<div className="header">
				<div>
					<h1 className="title">
						TODO List
					</h1>
				</div>
				<div className="buttonContainer">
					<NewButton onClick={this.handleClickOpen.bind(this)}/>
				</div>
				<AddDialog open={this.state.open} onClose={this.handleClose.bind(this)}/>
			</div>
		);
	}
}

export default Header;

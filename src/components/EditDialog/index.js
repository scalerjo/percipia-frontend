

import * as React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import './index.css';
import axios from 'axios';

export default class extends React.Component {
    constructor(props) {
        super();

        this.props = props;
        this.max=199;

        this.state = {
            open: false,
            remaining: this.max - (this.props.default ? this.props.default.length : 0),
            text: ""
        }
    }

    handleChange(e) {
        const length = e.target.value.length;


        this.setState({remaining: this.max - length, text: e.target.value})
    }

    handleSubmit(e) {
        if (this.state.remaining >= 0 && this.state.remaining != this.max && this.state.text.trim().length != 0) {
            axios.put("/api/todo", {
                ID: this.props.ID,
                Text: this.state.text,
                Time: Date.now()
            }).then(function(response) {
                window.location.href="/";
            }).catch(function(err) {
                window.location.href="/"
            })
        }
    }

    render() {
        return (
            <div className="form">
                <Dialog open={this.props.open} onClose={this.props.onClose} fullWidth>
                    <DialogTitle>Edit TODO List Item</DialogTitle>
                    <DialogContent>
                        <div className="space">
                            <TextField
                                id="outlined-multiline-static"
                                label="Enter Text"
                                multiline
                                rows={4}
                                fullWidth
                                onChange={this.handleChange.bind(this)}
                                defaultValue={this.props.default}
                            />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div style={{ color: (this.state.remaining < 0 ? 'red' : 'black') }} className="remainingIndicator">Remaining: {this.state.remaining}</div>
                        <Button
                            sx={{
                                "&.MuiButton-text": { color: "black" },
                                border: "1px grey solid"
                            }}
                            onClick={this.props.onClose}
                        >Cancel</Button>
                        <Button
                            sx={{
                                "&.MuiButton-text": { color: "black" },
                                border: "1px grey solid"
                            }}
                            onClick={this.handleSubmit.bind(this)}
                        >Edit</Button>
                    </DialogActions>
                    {this.state.error}
                </Dialog>
            </div>
        );
    }
}

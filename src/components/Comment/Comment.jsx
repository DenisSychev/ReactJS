import React, { Component } from 'react';
import './Comment.sass';

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
            displayAddButton: true,
            displayHideButton: false
        };
    }

    handleButtonClickShowComment = (e) => {
        console.log('Click button');
        this.setState({ displayForm: true });
        this.setState({ displayAddButton: false });
        this.setState({ displayHideButton: true });
        e.preventDefault();
    }

    handleButtonClickHideComment = (e) => {
        console.log('Click button');
        this.setState({ displayForm: false });
        this.setState({ displayAddButton: true });
        this.setState({ displayHideButton: false });
        e.preventDefault();
    }

    render() {
        const {displayForm} = this.state;
        const {displayAddButton} = this.state;
        const {displayHideButton} = this.state;
        return (
            <div className = "comment">
                <button style = {{display: displayAddButton ? 'block' : 'none' }} className="red_button" onClick = {this.handleButtonClickShowComment}>Добавить комментарий</button>
                <button style = {{display: displayHideButton ? 'block' : 'none' }} className="red_button" onClick = {this.handleButtonClickHideComment}>Скрыть поле комментария</button>
                <div style = {{display: displayForm ? 'block' : 'none' }}>
                    <input type="text" className="text_comment" />
                </div>
            </div>
        );
    }
};
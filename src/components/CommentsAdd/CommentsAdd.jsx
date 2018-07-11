import React, { PureComponent } from 'react';

export default class CommentsAdd extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            displayForm: false,
            displayAddButton: true,
            displayHideButton: false,
            value: ''
        };
    }

    handleButtonClickShowComment = (e) => {
        this.setState({ displayForm: true });
        this.setState({ displayAddButton: false });
        this.setState({ displayHideButton: true });
        e.preventDefault();
    }

    handleButtonClickHideComment = (e) => {
        this.setState({ displayForm: false });
        this.setState({ displayAddButton: true });
        this.setState({ displayHideButton: false });
        e.preventDefault();
    }

    handleCommentTextChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleButtonLeaveComment = (event) => {
        fetch('http://localhost:8000/api/comment', { 
            body: this.state.value,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST' 
        })
        .then((response) => {
            return response.json();
        })
        .then((content) => {
            console.log(content);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    render() {
        const { displayForm } = this.state;
        const { displayAddButton } = this.state;
        const { displayHideButton } = this.state;
        return (
            <div className="comment">
                <button style={{ display: displayAddButton ? 'block' : 'none' }} className="red_button" onClick={this.handleButtonClickShowComment}>Добавить комментарий</button>
                <button style={{ display: displayHideButton ? 'block' : 'none' }} className="white_button" onClick={this.handleButtonClickHideComment}>Скрыть поле комментария</button>
                <div style={{ display: displayForm ? 'block' : 'none' }}>
                    <label>
                        <input type="text" className="text_comment" value={this.state.value} onChange={this.handleCommentTextChange} />
                    </label>
                    <button className="red_button" onClick={this.handleButtonLeaveComment}>Оставить этот комментарий</button>
                </div>
            </div>
        );
    }
};
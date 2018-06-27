import React, { PureComponent, Fragment } from 'react';
import './Comment.sass';

export default class CommentsList extends PureComponent {
    render() {
        const {comments, onLoadMore} = this.props;        
        return (
            <Fragment>
                {comments.map(comment => 
                <div key={comment.id} className="text_comment">
                    <p className="author">{comment.name}</p>
                    <p>{comment.body}</p>
                </div>)}
                <button className="white_button" onClick={onLoadMore}>Загрузить ещё комментарии</button>
            </Fragment>
        );
    }
};
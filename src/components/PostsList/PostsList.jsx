import React, {PureComponent, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './post.sass';

import CommentsList from 'containers/CommentsContainer';
import CommentsAdd from 'components/CommentsAdd';

export default class PostsList extends PureComponent {
    render() {
        const {posts, onLoadMore} = this.props;        
        return (
            <Fragment>
                {posts.map(post => 
                <div className="post container" key={post.id}>
                    <h1><Link to={`/posts/${post.id}`}>{post.title}</Link></h1>
                    <p className="author">{post.userId}</p>
                    <p>{post.body}</p>
                    <CommentsAdd />
                    <CommentsList />
                </div>)}
                <button className="white_button" onClick={onLoadMore}>Загрузить ещё статьи</button>
            </Fragment>
        );
    }
};
import React, {PureComponent, Fragment} from 'react';
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
                    <h1>{post.title}</h1>
                    <p className="author">{post.userId}</p>
                    <p>{post.body}</p>
                    <img src='' alt=''/>
                    <CommentsAdd />
                    <CommentsList />
                </div>)}
                <button className="red_button" onClick={onLoadMore}>Загрузить ещё статьи</button>
            </Fragment>
        );
    }
};
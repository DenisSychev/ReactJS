import React, {PureComponent, Fragment} from 'react';
import './post.sass';

import Comment from 'components/Comment';

export default class PostsList extends PureComponent {
    render() {
        const {posts} = this.props;
        return (
            <Fragment>
                {posts.map(post => 
                <div className = "post container" key = {post.id}>
                    <h1>{post.title}</h1>
                    <p className = "author">{post.author}</p>
                    <p>{post.body}</p>
                    <img src='' alt=''/>
                    <Comment />
                </div>)}
            </Fragment>
        );
    }
};
import React, {PureComponent} from 'react';

export default class Post extends PureComponent {
    render() {
        const {post} = this.props;
        return (
            <div className={post.id}>
                {post.title} ({post.userId})
                {post.body}
            </div>
        );
    }
}
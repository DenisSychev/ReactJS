import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import Post from 'components/Post';

class PostContainer extends PureComponent {
    render() {
        const {post} = this.props;
        return (
            <Fragment>
                <div className = "content container">
                    <Post post={post} />
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => ({
        post: state.posts.article.find((post) => post.id === +props.match.params.id)
    })
)(PostContainer);
import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import PostsList from 'components/PostsList';
import {loadPosts} from 'actions/posts';

class PostsContainer extends PureComponent {

    componentDidMount() {
        const {load, posts} = this.props;
        if (!posts.length) {
            load();
        }
    };

    handleLoadMore = () => {
        const {load} = this.props;
        load();
    };

    render() {
        const {loading, posts} = this.props;
        return (
            <Fragment>
                <div className="content container">
                    {loading && !posts.length ? <div>Секундочку, идёт загрузка...</div> : <PostsList onLoadMore={this.handleLoadMore} posts={posts} />}
                </div>
            </Fragment>
        );
    }    
}

function mapStateToProps(state, props) {
    return {
        ...props,
        loading: state.posts.loading,
        posts: state.posts.article,
        page: state.posts.page,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: loadPosts.bind(null, dispatch),
    };
}

function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(PostsContainer);
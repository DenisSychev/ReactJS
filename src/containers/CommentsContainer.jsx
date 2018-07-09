import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import CommentsList from 'components/CommentsList';
import {loadComments} from 'actions/comments';

class CommentsContainer extends PureComponent {
    
    componentDidMount() {
        const {load, comments} = this.props;
        if (!comments.length) {
            load();
        }
    };

    handleLoadMore = () => {
        const {load} = this.props;
        load();
    };

    render() {
        const {loading, comments} = this.props;
        return (
            <Fragment>
                <div className="content container">
                    {loading && !comments.length ? <div>Секундочку, идёт загрузка...</div> : <CommentsList onLoadMore={this.handleLoadMore} comments={comments} />}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        loading: state.comments.loading,
        comments: state.comments.message,
        page: state.comments.page,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: loadComments.bind(null, dispatch),
    };
}

function mergeMap(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...ownProps,
        load: () => dispatchProps.load(stateProps.page),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeMap)(CommentsContainer);
import React, {PureComponent, Fragment} from 'react';

import CommentsList from 'components/CommentsList';

export default class CommentsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            comments: []
        };
    }

    loadComments() {
        const {page, comments} = this.state;
        if (page === 1) {
            this.setState({loading: true});
        }
        fetch(`https://jsonplaceholder.typicode.com/comments?limit=3&_page=${page}`)
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                loading: false,
                page: page + 1,
                comments: comments.concat(result),
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    };

    componentDidMount() {
        this.loadComments();
    };

    handleLoadMore = () => {
        this.loadComments();
    };

    render() {
        const {loading, comments} = this.state;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <CommentsList onLoadMore={this.handleLoadMore} comments={comments} />}
                </div>
            </Fragment>
        );
    }
}


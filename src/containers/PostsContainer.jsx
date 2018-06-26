import React, {PureComponent, Fragment} from 'react';

import PostsList from 'components/PostsList';

export default class PostsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            posts: []
        };
    }

    loadPosts() {
        const {page, posts} = this.state;
        if (page === 1) {
            this.setState({loading: true});
        }        
        fetch(`https://jsonplaceholder.typicode.com/posts?limit=10&_page=${page}`)
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                loading: false,
                page: page + 1,
                posts: posts.concat(result),
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    };

    componentDidMount() {
        this.loadPosts();
    };

    handleLoadMore = () => {
        this.loadPosts();
    };

    render() {
        const {loading, posts} = this.state;
        return (
            <Fragment>
                <div className="content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <PostsList onLoadMore={this.handleLoadMore} posts={posts} />}
                </div>
            </Fragment>
        );
    }
}
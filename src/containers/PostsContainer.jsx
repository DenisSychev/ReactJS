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

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                loading: false,
                posts
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    }

    render() {
        const {loading, posts} = this.state;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <PostsList posts={posts} />}
                </div>
            </Fragment>
        );
    }
}
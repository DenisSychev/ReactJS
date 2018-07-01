import React, {PureComponent, Fragment} from 'react';

import Post from 'components/Post';

export default class PostContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            post: {}
        };
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
        .then((response) => response.json())
        .then((post) => {
            this.setState({
                loading: false,
                post
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    }

    render() {
        const {loading, post} = this.state;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <Post post={post} />}
                </div>
            </Fragment>
        );
    }
}
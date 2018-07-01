import React, {PureComponent, Fragment} from 'react';

import User from 'components/User';

export default class UserContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: {}
        };
    }

    componentDidMount() {
        const {match} = this.props;
        this.setState({loading: true});
        fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`)
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                loading: false,
                users: result
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    }

    render() {
        const {loading, user} = this.state;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <User user={user} />}
                </div>
            </Fragment>
        );
    }
}
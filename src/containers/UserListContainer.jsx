import React, {PureComponent, Fragment} from 'react';

import UserList from 'components/UserList';

export default class UserListContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            users: []
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
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
        const {loading, users} = this.state;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <UserList users={users} />}
                </div>
            </Fragment>
        );
    }
}
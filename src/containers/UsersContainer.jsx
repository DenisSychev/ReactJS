import React, {PureComponent, Fragment} from 'react';

import Users from 'components/Users';

export default class UsersContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            usersList: []
        };
    }

    componentDidMount() {
        this.setState({loading: true});
        fetch('http://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((usersList) => {
            this.setState({
                loading: false,
                usersList
            })
        })
        .catch(() => {
            this.setState({loading: false})
        });
    }

    render() {
        const {loading, usersList} = this.state;
        return (
            <Fragment>
                {loading ? <div>Секундочку, идёт загрузка...</div> : <Users usersList = {usersList} />}
            </Fragment>
        );
    }
}
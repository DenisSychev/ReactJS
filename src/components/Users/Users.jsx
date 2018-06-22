import React, {PureComponent} from 'react';

export default class Users extends PureComponent {
    render() {
        const { users } = this.props;
        return (
            <ul className="navi container">
                {users.map(user => <li key = {user.id}>{user.name}</li>)}
            </ul>
        );
    }
};
import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import './users.sass';

export default class UserList extends PureComponent {
    render() {
        const { users } = this.props;
        return (
            <div className="user_list">
                <ul>
                    {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
                </ul>
            </div>
        );
    }
};
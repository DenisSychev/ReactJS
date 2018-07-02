import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import UserList from 'components/UserList';
import {loadUsers} from 'actions/users';

class UserListContainer extends PureComponent {

    componentDidMount() {
        const {load} = this.props;
        load();
    }

    render() {
        const {loading, users} = this.props;
        return (
            <Fragment>
                <div className = "content container">
                    {loading ? <div>Секундочку, идёт загрузка...</div> : <UserList users={users} />}
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...props,
        loading: state.users.loading,
        users: state.users.people,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        ...props,
        load: () => loadUsers(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
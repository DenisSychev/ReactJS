import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import User from 'components/User';

class UserContainer extends PureComponent {
    render() {
        const {user} = this.props;
        return (
            <Fragment>
                <div className = "content container">
                    <User user={user} />
                </div>
            </Fragment>
        );
    }
}

export default connect(
    (state, props) => ({
        user: state.users.people.find((user) => user.id === +props.match.params.id)
    })
)(UserContainer);
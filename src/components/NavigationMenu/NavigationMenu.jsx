import React, { PureComponent } from 'react';
import {Link, withRouter} from 'react-router-dom';
import './NavigationMenu.sass';
import classNames from 'classnames';


class NavigationMenu extends PureComponent {
    render() {
        const {location} = this.props;
        return (
            <header>
                <ul className="navi container">
                    <li className={classNames({ active:location.pathname === '/' })}><Link to="/">Обложка</Link></li>
                    <li className={classNames({ active:location.pathname === '/users' })}><Link to="/users">Пользователи</Link></li>
                    <li className={classNames({ active:location.pathname === '/posts' })}><Link to="/posts">Истории и комментарии</Link></li>
                </ul>
            </header>
        );
    }
};

export default withRouter(NavigationMenu);
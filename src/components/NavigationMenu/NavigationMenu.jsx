import React, { PureComponent } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './NavigationMenu.sass';

export default class NavigationMenu extends PureComponent {
    render() {
        const { naviMenuItems } = this.props;
        return (
            <BrowserRouter>
                <header>
                    <ul className="navi container">
                        <li><Link to="/users">Пользователи</Link></li>
                        <li><Link to="/posts">Истории и комментарии</Link></li>
                    </ul>
                </header>
            </BrowserRouter>
        );
    }
};
import React from 'react';
import './Header.sass';

import Logo from 'components/Logo';

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header-block container">
                    <Logo />
                    <input className='red_button' type="button" value='Авторизация' />
                </div>
            </div>
        );
    }
};
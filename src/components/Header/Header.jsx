import React from 'react';
import './HeaderButton.sass';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <input className='button' type="button" value='Авторизация' />
            </div>
        );
    }
};
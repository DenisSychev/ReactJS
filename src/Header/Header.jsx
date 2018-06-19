import React from 'react';
import './HeaderButton.css';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <input className='button' type="button" value='Авторизация' />
            </div>
        );
    }
};
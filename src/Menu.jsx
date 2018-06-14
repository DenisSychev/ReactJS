import React from 'react';
import './css/Menu.css';

export default class Menu extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <div className='navi'>
                <ul>
                    {items.map(item => <li><a href={item.link}>{item.title}</a></li>)}
                </ul>
            </div>
        );
    }
};
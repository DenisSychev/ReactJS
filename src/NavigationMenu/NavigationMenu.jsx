import React from 'react';
import './NavigationMenu.css';

export default class NavigationMenu extends React.Component {
    render() {
        const {naviMenuItems} = this.props;
        return (
            <div className='navi'>
                <ul>
                    {naviMenuItems.map(naviMenuitem => <li><a href={naviMenuitem.link}>{naviMenuitem.title}</a></li>)}
                </ul>
            </div>
        );
    }
};
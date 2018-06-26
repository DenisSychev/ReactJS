import React, {Component} from 'react';
import './NavigationMenu.sass';

export default class NavigationMenu extends Component {
    render() {
        const {naviMenuItems} = this.props;
        return (
            <header>
                <ul className = "navi container">
                    {naviMenuItems.map(naviMenuitem => <li key = {naviMenuitem.id}><a href={naviMenuitem.link}>{naviMenuitem.title}</a></li>)}
                </ul>
            </header>            
        );
    }
};
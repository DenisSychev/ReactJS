import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Header from './Header/Header.jsx';

import NavigationMenu from './NavigationMenu/NavigationMenu.jsx';
import {navigationMenuItems} from './NavigationMenu/NavigationMenuItems.js';

import Content from './Content/Content.jsx';
import {contentItems} from './Content/contentItems.js';

class Container extends React.Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <NavigationMenu naviMenuItems = {navigationMenuItems} />
                <Content contentItems = {contentItems} />
            </div>            
        );
    }
};

ReactDOM.render(<Container />, document.getElementById('container'));
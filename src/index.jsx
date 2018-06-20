import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

import Header from 'components/Header/Header';

import NavigationMenu from 'components/NavigationMenu/NavigationMenu';
import {navigationMenuItems} from 'components/NavigationMenu/NavigationMenuItems';

import Content from 'components/Content/Content';
import {contentItems} from 'components/Content/contentItems';

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
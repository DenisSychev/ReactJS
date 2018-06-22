import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

import Header from 'components/Header';

import NavigationMenu from 'components/NavigationMenu';
import {navigationMenuItems} from 'components/NavigationMenu/NavigationMenuItems';

import Content from 'components/Content';
import {contentItems} from 'components/Content/contentItems';

import Users from 'containers/UsersContainer';

class Container extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <NavigationMenu naviMenuItems = {navigationMenuItems} />
                <Content contentItems = {contentItems} hide/>
                <Users />
            </Fragment>            
        );
    }
};

ReactDOM.render(<Container />, document.getElementById('container'));
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './style.sass';

import Header from 'components/Header';
import Footer from 'components/Footer';

import NavigationMenu from 'components/NavigationMenu';
import { navigationMenuItems } from 'components/NavigationMenu/NavigationMenuItems';

import routes from './routes';

class Container extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <NavigationMenu naviMenuItems={navigationMenuItems} />
                <BrowserRouter>
                    <Switch>
                        {routes.map((route) => <Route {...route} />)}
                    </Switch>
                </BrowserRouter>
                <Footer />
            </Fragment>
        );
    }
};

ReactDOM.render(<Container />, document.getElementById('container'));
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './style.sass';

import Header from 'components/Header';
import NavigationMenu from 'components/NavigationMenu';
import Footer from 'components/Footer';

import routes from './routes';
import store from './store';

class Container extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <BrowserRouter>
                    <Fragment>
                        <NavigationMenu />
                        <Switch>
                            {routes.map((route, idx) => <Route key={idx} {...route} />)}
                        </Switch>
                    </Fragment>
                </BrowserRouter>
                <Footer />
            </Fragment>
        );
    }
};

ReactDOM.render(<Provider store={store}><Container /></Provider>, document.getElementById('container'));
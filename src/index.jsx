import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import './style.sass';
import 'components/NavigationMenu/NavigationMenu.sass';

import Header from 'components/Header';
import Footer from 'components/Footer';

import routes from './routes';

class Container extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <BrowserRouter>
                <Fragment>
                    <header>
                        <ul className="navi container">
                            <li><Link to="/">Обложка</Link></li>
                            <li><Link to="/users">Пользователи</Link></li>
                            <li><Link to="/posts">Истории и комментарии</Link></li>
                        </ul>
                    </header>
                    <Switch>
                        {routes.map((route) => <Route {...route} />)}
                    </Switch>
                    </Fragment>
                </BrowserRouter>
                <Footer />
            </Fragment>
        );
    }
};

ReactDOM.render(<Container />, document.getElementById('container'));
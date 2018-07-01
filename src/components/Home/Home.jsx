import React from 'react';
import './Home.sass';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home-block container">
                    <div className="home-text">
                        <h3>Блог</h3>
                        <h4>написанный на Реакте</h4>
                    </div>
                </div>
            </div>
        );
    }
};
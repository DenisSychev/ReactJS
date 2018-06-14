import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu.jsx';
import {menuItems} from './menuItems.js';

class Content extends React.Component {
    render() {
        return (
            <div><Menu items={menuItems} /></div>
        );
    }
};

ReactDOM.render(<Content />, document.getElementById('content'));
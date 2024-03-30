import React, {Component} from 'react';
import './menu.scss';

class Menu extends Component {
    render() {
        return (
            <ul id="menu">
                <a className="menu-button icon-plus" id="open-menu" href="#menu"></a>
                <a className="menu-button icon-minus" href="#0" title="Hide navigation"></a>
                <a href="/" className="menu-item one">
                </a>
                <a href="/" className="menu-item two">
                </a>
                <a href="/portfolio" className="menu-item three">
                </a>
            </ul>
        );
    }
}

export default Menu;
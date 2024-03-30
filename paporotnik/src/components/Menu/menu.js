import React, {Component} from 'react';
import './menu.scss';

class Menu extends Component {
    render() {
        return (
            <ul id="menu">
                <a className="menu-button icon-plus" id="open-menu" href="#menu"></a>
                <a className="menu-button icon-minus" href="#0" title="Hide navigation"></a>
                <li className="menu-item one">
                    <a href="/blog">
                        <span className="fa blog"></span>
                    </a>
                </li>
                <li className="menu-item two">
                    <a href="/">
                        <span className="fa root"></span>
                    </a>
                </li>
                <li className="menu-item three">
                    <a href="/portfolio">
                        <span className="fa portfolio"></span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default Menu;
import React, {Component} from 'react';
import './menu.scss';
class Menu extends Component {
    render() {
        return (
            <ul id="menu">
                <a className="menu-button icon-plus" id="open-menu" href="#menu" title="Show navigation"></a>
                <a className="menu-button icon-minus" href="#0" title="Hide navigation"></a>
                <li className="menu-item one">
                    <a href="#menu">
                        <span className="fa fa-linkedin"></span>
                    </a>
                </li>
                <li className="menu-item two">
                    <a href="#menu">
                        <span className="fa fa-instagram"></span>
                    </a>
                </li>
                <li className="menu-item three">
                    <a href="#menu">
                        <span className="fa fa-twitter"></span>
                    </a>
                </li>
            </ul>
        );
    }
}

export default Menu;
import React, {Component} from 'react';
import './button.scss';
class Button extends Component {
    render() {
        return (
            <a className={(this.props.variant !== '') ? 'button '+ this.props.variant : 'button dark'} href={this.props.link}>
                {this.props.text}
            </a>
        );
    }
}

export default Button;
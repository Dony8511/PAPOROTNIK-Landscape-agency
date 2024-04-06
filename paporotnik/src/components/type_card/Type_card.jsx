import {Component} from "react";
import Button from "../button/button";

export class Type_card extends Component {
    render() {
        return (
            <div className="card">
                    <h3 className="type_name">{this.props.name}</h3>
                    <p className="text_about">{this.props.text}</p>
                    <Button variant='white-outline' text={this.props.button}/>
            </div>
        )
    }
}
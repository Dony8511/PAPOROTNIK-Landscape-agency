import {Component} from "react";
import Button from "../button/button";

export class Type_card extends Component {
    render() {
        return (
            <div className={"cardt " + this.props.bg}>
                <h3 className="type_name">{this.props.name}</h3>
                <ul>
                    <li className="text_about">{this.props.text1}</li>
                    <li className="text_about">{this.props.text2}</li>
                    <li className="text_about">{this.props.text3}</li>
                    <li className="text_about">{this.props.text4}</li>
                    <li className="text_about">{this.props.text5}</li>
                </ul>
                {/*<Button variant='white-outline' text={this.props.button}/>*/}
            </div>
        )
    }
}
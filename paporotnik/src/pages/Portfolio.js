import React, {Component} from 'react';
import './../css/Portfolio.scss';
class Portfolio extends Component {
    render() {
        return (
            <>
                <h2 className='title-to-center'>НАШЕ ПОРТФОЛИО</h2>
                <h2 className='year'>2024</h2>
                <div className="cards-wrapper">
                    <Card text='Description Description Description ' />
                </div>
            </>
        );
    }
}
class Card extends Component{
    render() {
        return(
            <div className="card">
                <Ratings/>
                <h3 className="card-title">{this.props.title}</h3>
                <p className="card-descp">{this.props.text}</p>
                <img src={this.props.img} alt="" className="card-bg"/>
            </div>
        );
    }
}
function Ratings() {
    return(
        <>

        </>
    );
}

export default Portfolio;
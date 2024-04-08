import React, {Component, useState} from 'react';

import './../css/Portfolio.scss';
import card1 from './../img/portfolio/card1.png'
import card2 from './../img/portfolio/card2.png'
import card3 from './../img/portfolio/card3.png'
import card4 from './../img/portfolio/card4.png'

class Portfolio extends Component {
    render() {
        return (
            <>
                <h2 className='title-to-center'>НАШЕ ПОРТФОЛИО</h2>
                <h2 className='year'>2024</h2>
                <div className="cards-wrapper">
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                    <Card
                        title='PROJECT#1'
                        img={card1}
                        text='Description Description Description Description Description Description Description Description Description'
                    />
                </div>
            </>
        );
    }
}

class Card extends Component {
    render() {
        return (
            <div className={"card " + this.props.bgv}>
                <div className="flexable">
                    <Ratings/>
                    <div className="texts">
                        <h3 className="card-title">{this.props.title}</h3>
                        <p className="card-descp">{this.props.text}</p>
                    </div>
                </div>
                <img src={this.props.img} alt="" className="card-bg"/>
            </div>
        );
    }
}

function Ratings() {
    const initialLikes = Math.floor(Math.random() * 10001);
    let [likes, setLikes] = useState(initialLikes);
    const [prevLikes, setPrevLikes] = useState(initialLikes-1);
    console.log('--------beforeclick---------');
    console.log(initialLikes);
    console.log(prevLikes);
    console.log(likes);
    const toggleLike = () => {
        if (likes <= initialLikes) {
            setLikes(prevLikes => prevLikes+1);
            setPrevLikes(prevLikes);
        }
        else if(likes > initialLikes) {
            setLikes(prevLikes => prevLikes === prevLikes ? prevLikes - 1 : prevLikes);
        }
        console.log('--------afterclick---------');
        console.log(initialLikes);
        console.log(prevLikes);
        console.log(likes);
    };
    return (
        <div className='ratings'>
            <p className="likes_count">{likes}</p>
            <svg onClick={toggleLike} className='Rating_star' width="25" height="25" viewBox="0 0 25 25"
                 fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector"
                      d="M12.5 0L16.2087 8.45226L25 9.549L18.5003 15.8681L20.2256 24.9987L12.5 20.4523L4.77442 25L6.49971 15.8693L0 9.54774L8.79254 8.45101L12.5 0Z"
                      fill="white"/>
            </svg>


        </div>
    );
}

export default Portfolio;
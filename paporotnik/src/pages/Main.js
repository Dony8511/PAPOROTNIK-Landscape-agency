import React, {Component} from 'react';
import './../css/main.scss';
import pic1 from './../img/unsplash_pYyOZ8q7AII.png'
import pic2 from './../img/unsplash_28c3pajQlyI.png'
import pic3 from './../img/unsplash_zacucUA5LhE.png'
import wave_btn from './../img/svgSVG.svg'
import Button from "../components/button/button";

class Main extends Component {
    render() {
        return (
            <>
                <div className='container offer-cont'>
                    <div className="FirstBlock">
                        <div className="album">
                            <img src={pic1} alt="" className="pic"/>
                            <img src={pic2} alt="" className="pic"/>
                            <img src={pic3} alt="" className="pic"/>
                        </div>
                        <div className="offer">
                            <h2 className="offer-title">О НАС</h2>
                            <p className="offer-text">
                                Ландшафтное агентство PAPOROTNIK за 15 лет работы стало ведущим агентством на рынке
                                ландшафтного дизайна и в данный момент работает с самыми требовательными заказчиками.
                            </p>
                            <Button variant="dark-outline f" text="Подробнее" link="#"/>
                        </div>
                    </div>
                </div>
                <div className="dashed-line"></div>
                <div className="d">
                    <a><span className='c e'>Расчёт</span><img src={wave_btn} className='wave a'/></a>
                    <a><span className='c f'>Услуги</span><img src={wave_btn} className='wave b'/></a>
                </div>
                <div className="container darkSection">

                </div>

            </>
        );
    }
}

export default Main;
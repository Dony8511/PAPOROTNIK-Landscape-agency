import React, {Component} from 'react';
import './../css/main.scss';
import pic1 from './../img/unsplash_pYyOZ8q7AII.png'
import pic2 from './../img/unsplash_28c3pajQlyI.png'
import pic3 from './../img/unsplash_zacucUA5LhE.png'
import wave_btn from './../img/svgSVG.svg'
import Button from "../components/button/button";
import {Type_card} from "../components/type_card/type_card";
import Fade from '../img/Vector.svg';
// import card4 from "../img/portfolio/card4.png";
// import card3 from "../img/portfolio/card3.png";
// import card2 from "../img/portfolio/card2.png";
// import card1 from "../img/portfolio/card1.png";
import person1 from './../img/person1.png'
import person2 from './../img/person2.png'
import person3 from './../img/person3.png'
import person4 from './../img/person4.png'

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
                            <Button variant="dark-outline f" text="Подробнее" link="#scroll"/>
                        </div>
                    </div>
                </div>
                <div className="dashed-line"></div>
                <div className="waveBtns">
                    <a onClick={SwitchBlocksToCalc}><span className='_span pricing_btn'>Расчёт</span><img src={wave_btn}
                                                                                                          id='pricingwave'
                                                                                                          className='wave pricing_wave'/></a>
                    <a onClick={SwitchBlocksToCards}><span className='_span cards_btn'>Услуги</span><img src={wave_btn}
                                                                                                         id='cardswave'
                                                                                                         className='wave  cards_wave selectedWave'/></a>
                </div>
                <div id='scroll' className="container darkSection">
                    <div className="types">
                        <Type_card
                            name='БАЗОВЫЙ'
                            bg='cardb1'
                            text1='Дизайн и установка зеленых насаждений (цветы, кустарники, деревья) на участке до 500 кв.м.'
                            text2='Укладка газона на площади до 100 кв.м.'
                            text3='Стоимость: от 50 000 руб.'
                            text4='Время выполнения: 1-2 недели.'
                        />
                        <Type_card
                            name='ПРЕМИУМ'
                            bg='cardb2'
                            text1='Индивидуальный ландшафтный дизайн участка любого размера.'
                            text2='Создание 3D визуализации проекта.'
                            text3='услуги садовника.'
                            text4='Стоимость: от 100 000 руб.'
                            text5='Время выполнения: 4-6 недель.'
                        />
                        <Type_card
                            name='ПЛАТИНА'
                            bg='cardb3'
                            text1='Индивидуальная разработка уникального ландшафтного дизайна'
                            text2='Использование редких и экзотических растений.'
                            text3='Гарантийное обслуживание на 1 год.'
                            text4='Стоимость: от заказа.'
                            text5='Время выполнения: до 1 года.'
                        />
                        <Type_card
                            name='ГОРОДСКОЙ'
                            bg='cardb4'
                            text1='Разработка дизайна и устройство парка или общественной зоны.'
                            text2='Установка инфраструктуры.'
                            text3='Посадка деревьев, создание архитектурных композиций.'
                            text4='Стоимость: от 500 000 руб.'
                        />
                    </div>
                    <div className="calculator hiddenblock">
                        <div className="form">
                            <select id="options">
                                <option value="option1">Базовый</option>
                                <option value="option2">Премиум</option>
                                <option value="option3">Платина</option>
                            </select>
                            <input id='house' type="text" placeholder='Площадь участка в м2'/>
                            <button className='btn' onClick={getSelectedOption}>Расчитать</button>
                        </div>
                        <h3 id='result' className="resultprice"></h3>
                    </div>
                </div>
                <img src={Fade} alt="fade" className="fade"/>
                <div className="teamtabsbtns container">
                    <h2 onClick={openTab1} id={'ourteam'} className="teamtabswitcher selectedTab">НАША КОМАНДА</h2>
                    <h2 onClick={openTab2} id={'ourdesigners'} className="teamtabswitcher">НАШИ ДИЗАЙНЕРЫ</h2>
                </div>
                <div className="teamtabs container">
                    <div id={'tab1'} className="tabwrapper">
                        <PersonCard
                            img={person1}
                            name={'Виктор Яковски'}
                            pos1={"CEO"}
                            pos2={"FOUNDER"}
                        />
                        <PersonCard
                            img={person2}
                            name={'Дмитрий Чернышевский'}
                            pos1={"COO"}
                            pos2={"COFOUNDER"}
                        />
                        <PersonCard
                            img={person3}
                            name={'Сергей Морозов'}
                            pos1={"КРЕАТИВНЫЙ ДИРЕКТОР"}
                            pos2={"COFOUNDER"}
                        />
                    </div>
                    <div id={'tab2'} className="tabwrapper hiddenblock">
                        <PersonCard
                            img={person4}
                            name={'Михаил Данков'}
                            pos1={"ДИЗАЙНЕР"}
                            pos2={"ДЕКОРАЦИИ"}
                        />
                        <PersonCard
                            img={person3}
                            name={'Юрий Нагаров'}
                            pos1={"ДИЗАЙНЕР"}
                            pos2={"ПРИРОДА"}
                        />
                    </div>
                </div>

                <div className="contacts container">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3A917849a7249da291fe6cbd05a684b38b73ebb2aecbe84b8d9b501f015f07c9a9&amp;source=constructor"
                        width="920" height="450" frameBorder="0"></iframe>
                    <div className="contacts-block">
                        <p className="contact">phone: +7 (960) 140 22-66</p>
                        <p className="contact">phone 2: +7 (999) 111 22-66</p>
                        <p className="contact">paporotnik.best@bestmail.super</p>
                        <p className="contact">ул. Гагарина 35A</p>
                    </div>
                </div>

                {/*<script src="./../js/dropdown.js"></script>*/}
            </>


        );

        function  openTab2 (){
            let tab1 = document.getElementById('tab1')
            let tab2 = document.getElementById('tab2')
            let btn1 = document.getElementById('ourteam')
            let btn2 = document.getElementById('ourdesigners')

            tab1.classList.add('hiddenblock')
            tab2.classList.remove('hiddenblock')

            btn1.classList.remove('selectedTab')
            btn2.classList.add('selectedTab')

        }
        function  openTab1 (){
            let tab1 = document.getElementById('tab1')
            let tab2 = document.getElementById('tab2')
            let btn1 = document.getElementById('ourteam')
            let btn2 = document.getElementById('ourdesigners')

            tab1.classList.remove('hiddenblock')
            tab2.classList.add('hiddenblock')

            btn1.classList.add('selectedTab')
            btn2.classList.remove('selectedTab')

        }
        function getSelectedOption() {
            let dropdown = document.getElementById("options");
            let input = document.getElementById('house').value;
            let result = document.getElementById('result')
            let mult = 1
            console.log(mult)


            let selectedOption = dropdown.options[dropdown.selectedIndex].value;

            if (selectedOption === 'option1') {
                mult = 1.2;
            } else if (selectedOption === 'option2') {
                mult = 1.8;
            } else if (selectedOption === 'option3') {
                mult = 2.5;
            }
            console.log(mult)
            result.textContent = 'от ' + input * 1500 * mult + '₽';
            console.log("Выбрана опция:", selectedOption);
            // Здесь можно выполнить необходимые действия с выбранным значением
        }
    }


}

class PersonCard extends Component {
    render() {
        return (
            <div className='personcard'>
                <img src={this.props.img} alt="" className="personimg"/>
                <div className="aboutperson">
                    <h3 className="personName">{this.props.name}</h3>
                    <div className="positions">
                        <div className="position">{this.props.pos1}</div>
                        <div className="position">{this.props.pos2}</div>
                    </div>
                </div>
            </div>
        );

    }
}


function SwitchBlocksToCalc() {
    let pricebtn = document.getElementById('pricingwave');
    let cardsbtn = document.getElementById('cardswave');

    let cardsblock = document.querySelector('.types');
    let calcblock = document.querySelector('.calculator');

    cardsblock.classList.add('hiddenblock');
    calcblock.classList.remove('hiddenblock')

    pricebtn.classList.add('selectedWave');
    cardsbtn.classList.remove('selectedWave')

}

function SwitchBlocksToCards() {
    let pricebtn = document.getElementById('pricingwave');
    let cardsbtn = document.getElementById('cardswave');

    let cardsblock = document.querySelector('.types');
    let calcblock = document.querySelector('.calculator');

    cardsblock.classList.remove('hiddenblock');
    calcblock.classList.add('hiddenblock')

    pricebtn.classList.remove('selectedWave');
    cardsbtn.classList.add('selectedWave')

}

export default Main;
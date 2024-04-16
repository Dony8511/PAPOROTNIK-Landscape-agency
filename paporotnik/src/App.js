import logo from './img/Logo.png';
import './css/index.scss';
import {Routes, Route} from 'react-router-dom';
import Button from "./components/button/button";
import Main from "./pages/Main";
import Menu from "./components/Menu/menu";
import React from "react";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/blog";

function App() {
    return (
        <div className="App">
            <header>
                <a href="/"><img src={logo} className="logo" alt="logo"/></a>
                <Menu/>
                {/*<Button variant="dark" text="Button" link="#"/>*/}
                {/*    ВАРИАНТЫ КНОПОК: "dark","dark-outline","white","white-outline"*/}
                {/*    ЕСЛИ БУДЕТ КАКАЯТО ОШИБКА ИЗ ЗА СЦСС ТО НАПИШИ 'npm i scss' */}
            </header>
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/portfolio' element={<Portfolio/>}/>
                <Route path='/blog' element={<Blog/>}/>
            </Routes>
            <footer>
                <p className="f_logo pl">PAPOROTNIK</p>
                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5.75" cy="5.5" r="5.5" fill="white"/></svg>
                <div className="group">
                    <p className="f_logo">AUTORS:</p>
                    <div className="names">
                        <p className="f_name">YUSHKOV VASILIY</p>
                        <p className="f_name">KUVANDIKOV RUSLAN</p>
                    </div>
                </div>


                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5.75" cy="5.5" r="5.5" fill="white"/></svg>
                <div className="group">
                    <p className="f_logo">LINKS:</p>
                    <div className="names pr">
                        <p className="f_name"><a href="">BEHANCE, </a><a href="">VK</a> </p>
                        <p className="f_name"><a href="">VK</a> </p>
                    </div>
                </div>


            </footer>
        </div>
    );
}
export default App;
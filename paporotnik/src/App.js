import logo from './img/Logo.png';
import './css/index.scss';
import {Routes, Route} from 'react-router-dom';
import Button from "./components/button/button";
import Main from "./pages/Main";
import Menu from "./components/Menu/menu";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="header">
                <img src={logo} className="logo" alt="logo"/>
                <Menu/>
                {/*<Button variant="dark" text="Button" link="#"/>*/}
                {/*    ВАРИАНТЫ КНОПОК: "dark","dark-outline","white","white-outline"*/}
                {/*    ЕСЛИ БУДЕТ КАКАЯТО ОШИБКА ИЗ ЗА СЦСС ТО НАПИШИ 'npm i scss' */}
            </div>
            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
        </div>
    );
}
export default App;
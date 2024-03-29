import logo from './img/Logo.png';
import './css/index.scss';
import {Routes, Route} from 'react-router-dom';
import Button from "./components/button/button";

function App() {
    return (
        <div className="App">
            <div className="container">
                <img src={logo} className="logo" alt="logo"/>
                {/*<Button variant="dark" text="Button" link="#"/>*/}
                {/*    ВАРИАНТЫ КНОПОК: "dark","dark-outline","white","white-outline"*/}
                {/*    ЕСЛИ БУДЕТ КАКАЯТО ОШИБКА ИЗ ЗА СЦСС ТО НАПИШИ 'npm i sass' */}
            </div>
            <Routes>
                <Route path='/' element={<Button variant="dark" text="Button" link="#"/>}/>
                <Route path='/portfolio' element={<Button variant="dark-outline" text="Button" link="#"/>}/>
            </Routes>
        </div>
    );
}

export default App;

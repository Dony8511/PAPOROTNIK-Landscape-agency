import React, {Component} from 'react';
import './../css/main.scss';
import pic1 from './../img/unsplash_pYyOZ8q7AII.png'
import pic2 from './../img/unsplash_28c3pajQlyI.png'
import pic3 from './../img/unsplash_zacucUA5LhE.png'

class Main extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <div className="content">
                        <div className="album">
                            <img src={pic1} alt="" className="pic"/>
                            <img src={pic2} alt="" className="pic"/>
                            <img src={pic3} alt="" className="pic"/>
                        </div>
                        <div className="offer">

                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
import React from 'react'
import './Home.scss'

import MainSvg from '../../assets/dev-svg.svg'

function Home(){
    return(
        <div id="HOME">
            <section className='home-section'>
                <div className='home-section-title'>
                    <div className='presentation-div'>
                        <div className='presentation-div-items'>
                            <div className='hi-there'>
                                <p>Hi there</p>
                                <span className='hi-there-span'>👋🏻</span>
                            </div>
                            <p>I'm Edouard Maisin</p>
                        </div>
                        <div className='text-apparition'>
                            <p id="home-text">Full stack developper</p>
                        </div>
                    </div>
                </div>
                <div className='home-section-image'>
                    <img src={MainSvg} alt='main-svg' className='home-svg'></img>
                </div>
            </section>
            <div>

            </div>
        </div>
    );
}

export default Home;
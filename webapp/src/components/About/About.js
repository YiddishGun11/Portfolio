import React from 'react'
import './About.scss'

import {DiReact, DiSass} from 'react-icons/di'
import {SiJavascript, SiNodedotjs,SiCplusplus,SiCoursera} from 'react-icons/si'
import {TbCSharp} from 'react-icons/tb'
import {FaGit} from 'react-icons/fa'
import {BsWindows} from 'react-icons/bs'

import {useDispatch} from 'react-redux'
import {setDisplay} from '../../reducers/dashboardReducer'


function About(){

    const dispatch = useDispatch();

    return(

        <div className='about-container' id="ABOUT">
            <div><h1 className='about-title'>ABOUT ME</h1></div>
            <div className='about-body'>
                <div className='about-body-items'>
                    <div>
                        <h2>My name's Edouard Maisin</h2>
                    </div>
                    <div>
                        <p>
                            Currently studying <span className='about-text'>computer sciences</span> in Belgium. In my free time, I have interest in System and Security with <span className='about-text'>C, C++ and Assembly languages </span>
                            Whenever possible. I also apply my passion for web development at school with<span className='about-text'>NodeJS</span> and Modern Javascript Libraries and Frameworks like <span className='about-text'>React.js and VueJs</span>.
                            Currently working on big projects...
                        </p>
                    </div>
                </div>

                <div className='technologies'>
                    <h1>Tech I'm Using</h1>
                    <div className='icons'>
                        <DiReact color='white' size={120} className="about-icons" id='react' onClick={()=>dispatch(setDisplay('react'))}/>
                        <SiJavascript color='white' size={100} className="about-icons" onClick={()=>dispatch(setDisplay('js'))}/>
                        <SiNodedotjs color='white' size={100} className="about-icons" onClick={()=>dispatch(setDisplay('nodejs'))}/>
                        <DiSass color='white' size={110} className="about-icons" onClick={()=>dispatch(setDisplay('sass'))}/> 
                        <TbCSharp color='white' size={110} className="about-icons"/>
                        <SiCoursera color='white' size={100} className="about-icons" id='c-programming'/>
                        <SiCplusplus color='white' size={100} className="about-icons" id='c-programming'/>
                        <FaGit color='white' size={110} className="about-icons" onClick={()=>dispatch(setDisplay('wingit'))}/> 
                        <BsWindows color='white' size={100} className="about-icons" onClick={()=>dispatch(setDisplay('wingit'))}/> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
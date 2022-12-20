import React from 'react'
import './Dashboard-childs.scss'

import {SiJavascript} from 'react-icons/si'


function JsInfos(){
    return(
        <div className='item-container'>
            <div className='item-title'>
                <h1>Javascript</h1>
                <SiJavascript size={35} id='dashboard-icon'/>
            </div>
            <div className='body-items'>
                <div id='first-container'>
                    <h2>Skills</h2>
                    <ul>
                        <li>I consider possessing a good advanced level</li>
                        <li>Mastering basisc and advanced skills with Javascript due to my computer sciences studies oriented in web development</li>
                        <li>I can manipulate : requests, DOM, errors treatments, promises, events etc.</li>
                        <li>Asynchrone programming</li>
                        <li>I implement all this knoledges in modern Js frameworks like React, NodeJs and VueJS</li>
                        <li>Implementing testing with Jest and Cypress</li>
                    </ul>
                </div>
                <div id='second-container'>
                    <h2>Ressources</h2>
                    <ul>
                        <li><a href='https://www.youtube.com/watch?v=asToYAq0F-I&list=PLjwdMgw5TTLXgsTQE_1PpRkC_yX47ZcGV'>Learn Js with GrafikArt</a></li>
                        <li><a href='https://developer.mozilla.org/en-US/'>Daily documentation with MDN, W3Schools and StackOverflow</a></li>
                        <li>Youtube</li>
                        <li>Last year of my bachelor who was benefic to learn Javascript</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JsInfos;
import React from 'react'
import './Dashboard-childs.scss'

import {SiNodedotjs} from 'react-icons/si'

function NodeInfos(){
    return(
        <div className='item-container'>
            <div className='item-title'>
                <h1>NodeJs</h1>
                <SiNodedotjs size={40} id='dashboard-icon'/>
            </div>
            <div className='body-items'>
                <div id='first-container'>
                    <h2>Skills</h2>
                    <ul>
                        <li>I consider possessing a good advanced level</li>
                        <li>Using Express to build fast NodeJS apps</li>
                        <li>I use cool Nodejs tools like express-validator, router and other tools to implement cool options</li>
                        <li>I have a good comprehension of REST API's due to school lessons in development</li>
                        <li>I can implement testing</li>
                    </ul>
                </div>
                <div id='second-container'>
                    <h2>Ressources</h2>
                    <ul>
                        <li><a href='https://www.youtube.com/results?search_query=learn+node+js'>Learn NodeJs</a></li>
                        <li><a href='https://nodejs.org/en/docs/'>Official documentation</a></li>
                        <li>Youtube</li>
                        <li>Books ressources</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NodeInfos;
import React from 'react'
import './Dashboard-childs.scss'

import {DiSass } from 'react-icons/di'

function SassInfos(){
    return(
        <div className='item-container'>
            <div className='item-title'>
                <h1>CSS &</h1>
                <DiSass size={40} id='dashboard-icon'/>
            </div>
            <div className='body-items'>
                <div id='first-container'>
                    <h2>Skills</h2>
                    <ul>
                        <li>I consider possessing an advanced level in web desing with CSS</li>
                        <li>I use SASS to implement proper css code </li>
                        <li>I can use all concepts of SASS with variables, conditions, extends, mixins etc.</li>
                        <li>I use Keyframes and media-queries to build proper and responsive webs sites</li>
                        <li>I master flex-box, gradients, grid, filters and other cool css properties</li>
                    </ul>
                </div>
                <div id='second-container'>
                    <h2>Ressources</h2>
                    <ul>
                        <li><a href='https://sass-lang.com/'>Learn SASS</a></li>
                        <li><a href='https://www.youtube.com/results?search_query=grafikart+sass'>GrafikArt SASS lessons</a></li>
                        <li>Youtube</li>
                        <li>online ressources and videos</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SassInfos;
import React from 'react'
import './Dashboard-childs.scss'

function WinGit(){
    return(
        <div className='item-container'>
            <div className='item-title'>
                <h1>Windows & Git</h1>
            </div>
            <div className='body-items'>
                <div id='first-container'>
                    <h2>Windows</h2>
                    <ul>
                        <li>I'm currently forming myself on Windows with windows internals and reverse engineering books</li>
                        <li>I have interest for windows programming with C and C++</li>
                        <li>I have good bases in understanding of x32 and x64 architecture on windows</li>
                        <li>I have interest in software security on windows</li>
                        <li>I use github and other plateforms to collect new informations in my learning</li>
                    </ul>
                </div>
                <div id='second-container'>
                    <h2>Git</h2>
                    <ul>
                        <li>I use daliy git with my differents projects</li>
                        <li>I can manipulate several git commands to optimize my dev work</li>
                        <li>I have received a formation with Git in my second and third year with an Dev expert who daily use this tool a his work in Odoo</li>
                        <li>I acquired good workflows to code properly on my projects with branchs, github actions, issues and other tools</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WinGit;
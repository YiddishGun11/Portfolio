import React from 'react'
import './Dashboard-childs.scss'

import {DiReact} from 'react-icons/di'

function ReactInfos(){
    return(
        <div className='item-container'>
            <div className='item-title'>
                <h1>React</h1>
                <DiReact size={40} id='dashboard-icon'/>
            </div>
            <div className='body-items'>
                <div id='first-container'>
                    <h2>Skills</h2>
                    <ul>
                        <li>I consider possessing a good advanced level</li>
                        <li>Mastering Props, States and usage of components in several cool implementations</li>
                        <li>I use cool react tools like React-router, icons and other packages adding cool implementations and app optimisation</li>
                        <li>Use of Redux in medium and large apps for state managing</li>
                        <li>I can manipulate the 10 basics react hooks : useState, useEffect, useRef, useContext, useMemo, useCallback etc</li>
                        <li>Good understanding of React context</li>
                        <li>Can manipulate React error boudaries</li>
                        <li>Currently reading official React doc for a better and proper code</li>
                        <li>Implementing testing with Jest</li>
                    </ul>
                </div>
                <div id='second-container'>
                    <h2>Ressources</h2>
                    <ul>
                        <li><a href='https://www.youtube.com/watch?v=SMgQlTSoXf0&list=PLjwdMgw5TTLWom67YfZuha-1iYzIirwJR&index=1'>Learn React with GrafikArt</a></li>
                        <li><a href='https://reactjs.org/docs/getting-started.html'>Official documentation</a></li>
                        <li>Youtube</li>
                        <li><a href='https://books.goalkicker.com/'>Books ressources</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ReactInfos;
import React from 'react'
import './Dashboard.scss'

import ReactInfos from './Dashboard-childs/ReactInfos'
import JsInfos from './Dashboard-childs/JsInfos'
import NodeInfos from './Dashboard-childs/NodeInfos'
import SassInfos from './Dashboard-childs/SassInfos'
import WinGit from './Dashboard-childs/WinGit'

import { useSelector, useDispatch } from 'react-redux'

import {setDisplay} from '../../reducers/dashboardReducer'


function Dashboard() {

    const display = useSelector((state)=>state.dashboardReducer.display);
    const dispatch = useDispatch();

    return(
        <div className='dashboard-section' onClick={()=>dispatch(setDisplay(''))} id="DASHBOARD">
            {( () =>{
                switch(display){
                    case(''):
                    return(
                        <div className='main-content'>
                            <h1>Welcome to my Dashboard !</h1>

                            <p>Select an icon above to discover my knowledges for a specific technology</p>

                            <p>For more information, don't hesitate to contact me on my personnal mail</p>
                            <a href='#FOOTER'>CONTACT ME</a>
                        </div>
                    )

                    case('react'):
                        return(
                            <ReactInfos />
                        )

                    case('js'):
                        return(
                            <JsInfos />
                        )

                    case('nodejs'):
                        return(
                            <NodeInfos />
                        )
                    case('sass'):
                        return(
                            <SassInfos />
                        )

                    case('wingit'):
                        return(
                            <WinGit />
                        )

                    default:
                        return(
                            <div></div>
                        )
                    }
            })()}
        </div>
    );
}

export default Dashboard;
import React from 'react'
import './Projects.scss'

import shufletunes from '../../assets/shuffletunes.png'
import portfolio from '../../assets/portfolio.png'
import Enova from '../../assets/enova.png'

import {DiReact, DiSass} from 'react-icons/di'
import {GrRaspberry} from 'react-icons/gr'
import {SiNodedotjs, SiJavascript, SiDotnet} from 'react-icons/si'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {TbCSharp} from 'react-icons/tb'

function Projects(){
    return(
        <div className='projects-container' id="PROJECTS">
            <h1>My Projects</h1>
            <div className='projects-items'>
                <div className='ShuffleTunes'>
                    <img src={shufletunes} alt='webapp'></img>
                    <p id='title'>ShuffleTunes</p>
                    <p id='text'>Music application developped for school project able to set music on several speakers</p>
                    <div className='tech'>
                        <p>Build with :</p>
                        <div>
                            <DiReact size={30} />
                            <DiSass size={30}/>
                            <GrRaspberry size={30}/>
                            <SiNodedotjs size={30} />
                        </div>
                    </div>
                </div>
                <div className='ShuffleTunes'>
                    <img src={portfolio} alt='webapp'></img>
                    <p id='title'>Portfolio</p>
                    <p id='text'>My personnal portfolio which resumes my journey in the world of development 🚀</p>
                    <div className='tech'>
                        <p>Build with :</p>
                        <div>
                            <DiReact size={30} />
                            <DiSass size={30}/>
                            <AiFillHtml5 size={28}/>
                            <FaCss3Alt size={28} />
                        </div>
                    </div>
                </div>
                <div className='ShuffleTunes'>
                    <img src={Enova} alt='webapp' className='enova-image'></img>
                    <p id='title'>Enova</p>
                    <p id='text'><br></br><br></br>in development...⚙️</p>
                    <div className='tech'>
                        <p>Build with :</p>
                        <div>
                            <DiReact size={30} />
                            <DiSass size={30}/>
                            <TbCSharp size={30}/>
                            <SiJavascript size={28} />
                            <SiDotnet size={35} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
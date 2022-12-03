import React from 'react'
import './NavBar.scss'


import { VscGithubAlt } from 'react-icons/vsc'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill, BsFillCollectionFill, BsCodeSlash } from 'react-icons/bs' 

function NavBar(){

    return(
        <div className='navbar' >
            <div>
                <h1 className='main-title'>My Portfolio.</h1>
            </div>
            <div className='navbar-navigation'>
                <div className='navbar-items'>
                    <AiFillHome size={22} className="navbar-icons"/>
                    <a href="#HOME">Home</a>
                </div>
                <div className='navbar-items'>
                    <BsFillPersonFill size={22} className="navbar-icons"/>
                    <a href="#ABOUT">About</a>
                </div>
                <div className='navbar-items'>
                    <BsFillCollectionFill size={22} className="navbar-icons"/>
                    <a href="#PROJECTS">Projects</a>
                </div>
                <div className='navbar-items'>
                    <BsCodeSlash size={22} className="navbar-icons"/>
                    <a href="#DASHBOARD">Dashboard</a> 
                </div>
                <div className='join-github'>
                    <a href='https://github.com/YiddishGun11'><VscGithubAlt size={22} color='white' className="navbar-icons"/></a>
                </div>
            </div>
        </div>
    );
}

export default NavBar

//<nav className={(`navbar ${showLinks ? "show-nav" : "hide-nav"} `)}>
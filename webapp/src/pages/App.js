import React from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Dashboard from '../components/Dashoard/Dashboard'
import Justification from '../components/Justification/Justification'


function App(){
    return(
        <div>
            <NavBar />
            <Home />
            <Projects />
            <About />
            <Dashboard />
            <Justification />
            <Footer />
        </div>
    );
}

export default App;
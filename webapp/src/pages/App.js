import React from 'react'
import './App.css'
import NavBar from '../components/NavBar/NavBar'
import Home from '../components/Home/Home'
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Dashboard from '../components/Dashoard/Dashboard'



function App(){
    return(
        <div>
            <NavBar />
            <Home />
            <Projects />
            <About />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default App;
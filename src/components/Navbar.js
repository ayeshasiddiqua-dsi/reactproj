import React, { Component } from 'react'
import './NavBar.css';

export class Navbar extends Component {
    render() {
        return (
<<<<<<< HEAD
            <div >
                <nav className="main-container">
                    <h1 className="brand"><a href="" id="mainn">DesignBoost</a></h1>
=======
            <div className="main-container">
                <nav>
                    <h1><a href="" id="mainn">DesignBoost</a></h1>
>>>>>>> 7296e65e449e02805b4e2b49de1d5648521bf69c
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>PORTFOLIO</li>
                        <li>OUR BLOG</li>
                        <li>SERVICES</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar


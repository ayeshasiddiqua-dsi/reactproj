import React, { Component } from 'react'
import './NavBar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="main-container">
                <nav>
                    <h1><a href="" id="mainn">DesignBoost</a></h1>
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


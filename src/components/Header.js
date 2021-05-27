import React from "react";
import Typed from 'react-typed';


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>A MAn with Tech and Speech</h1>
                <Typed className="typed-text" 
                strings={["Web Development", "Android Development", "Arduino", "Robotics", "Drones", "3D Designing"]}
                typeSpeed={60} backSpeed={60} backDelay={25} loop/>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>

    )
}

export default Header

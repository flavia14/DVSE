import React from "react"
import "../style.css"
export default function Navbar() {
    return (
        <nav>
            <div class="nav">  
                <img src={process.env.PUBLIC_URL +"./images/airbnb 1.png"} alt="airbnb" className="nav--logo"/>
            </div>
          <div>
          <div>
            
                <img src={process.env.PUBLIC_URL +"./images/image 29.png"} alt="img2" className="nav--img" /> 
          </div>
          <div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
          </div></div>
        </nav>
    )
}
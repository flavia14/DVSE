import React from "react"

export default function Footer() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL +"/images/Facebook Icon.png"} alt="Flavia" className="small-pic"/>
            <img src={process.env.PUBLIC_URL +"/images/Instagram Icon.png"} alt="Flavia" className="small-pic"/>
            <img src={process.env.PUBLIC_URL +"/images/Twitter Icon.png"} alt="Flavia" className="small-pic"/>
            <img src={process.env.PUBLIC_URL +"/images/GitHub Icon.png"} alt="Flavia" className="small-pic"/>
        </nav>
    )
}
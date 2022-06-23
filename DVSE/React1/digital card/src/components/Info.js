import React from "react"

export default function Info() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL +"/images/flavia.jpg"} alt="Flavia" className="pic"/>
            <h1> Flavia Andron Calina - Student
            </h1> 
            <div>
            <button>LinkedIn</button>

            </div>
        </nav>
    )
}
import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import "./style.css"
export default function App() {

    const cards = data.map(item => {
        return (
            
            <Card 
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}

            />
        )
    }) 
    return (
        <div>
            <div>
            <Navbar /></div>
            <section >{cards}</section>
           
        </div>
    )
}
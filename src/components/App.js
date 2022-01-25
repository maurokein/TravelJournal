import React from "react";
import Header from "./Header";
import data from '../data'
import Main from "./Main";

export default function App() {
    const places = data.map(place => 
    <Main 
        arguments={place}
    />
    )
    return(
        <div>
            <Header />
            <section className="places--list">
                {places}
            </section>
        </div>
    )
}
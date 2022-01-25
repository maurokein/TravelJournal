import React from "react";

export default function Main(props){
    return(
        <section className="place">
            <img src={props.arguments.imageUrl} alt={props.arguments.title} className="place--image"/>
            <div className="place--data">
                <div className="place--data__location">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <span>{props.arguments.location}</span>
                    <a href={props.arguments.googleMapsUrl} className="maplink">View on Google Maps</a>
                </div>
                <h1 className="place--data__title">{props.arguments.title}</h1>
                <div className="place--data__dateStamp">
                    <h4>{props.arguments.startDate} - {props.arguments.endDate}</h4>
                    <p className="place--data__description">{props.arguments.description}</p>
                </div>
            </div>
        </section>
    )
}
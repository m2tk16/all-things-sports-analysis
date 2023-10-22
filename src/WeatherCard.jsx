import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Arc from './LoadingArc';



const WeatherCard = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        "location": "",
        "temp": "",
        "wind_mph": "",
        "guest_mph": "",
        "icon": ""
    })

    const currentWeather = async (lat, long) => {
        const weatherUrl = "https://w3al9qiv11.execute-api.us-west-2.amazonaws.com/default/getLocalWeather?latitude=" + lat + "&longitude=" + long
        console.log(weatherUrl);
        const response = await fetch(weatherUrl);
        const response_data = await response.json();
        console.log(response_data);
        const dict = {
            "location": response_data.location,
            "temp": response_data.temp,
            "wind_mph": response_data.wind_mph,
            "gust_mph": response_data.gust_mph,
            "icon": response_data.icon
        }
        setData(dict);
        setLoading(false);
        
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat, long);
            currentWeather(lat, long);
        });
    },[]);

    return (
        <>
            {loading ? <Arc /> : 
                <Card className="info-card">
                    <Card.Body className="card-body">
                    <Card.Title className="card-title">{data.location} | Weather
                    <hr className="card-hr"></hr></Card.Title>
                    <div className="weather-details-box">
                        <Image src={data.icon} roundedCircle />
                    </div>
                    <div className="weather-details-box">
                        <Card.Text>{data.temp}</Card.Text>
                    </div>
                    <div className="weather-details-box">
                        <Card.Text>{data.wind_mph}</Card.Text>
                    </div>
                    <div className="weather-details-box">
                        <Card.Text>{data.gust_mph}</Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            }
        </>
    )
}

export default WeatherCard;
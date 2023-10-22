import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Arc from './LoadingArc';
import WeatherCard from './WeatherCard';

const Home = () => {
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
        setLoading(false)
        console.log(dict);
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            console.log(lat, long)
            currentWeather(lat, long);
        });
    },[]);

    return (
        <Row xs={1} md={2} className="g-4">
            <Col key={1}>
            {loading ? <Arc /> :
                <WeatherCard data={data} />
            }
            </Col>
        </Row>
    )
}

export default Home;
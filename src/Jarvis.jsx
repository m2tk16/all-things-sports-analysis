import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WeatherCard from './WeatherCard';
import StocksCard from './Stocks';



const Home = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({
        "location": "",
        "temp": "",
        "wind_mph": "",
        "guest_mph": "",
        "icon": "",
    })

    const currentWeather = async (lat, long) => {
        const weatherUrl = "https://w3al9qiv11.execute-api.us-west-2.amazonaws.com/default/getLocalWeather?latitude=" + lat + "&longitude=" + long
        console.log(weatherUrl);
        const response = await fetch(weatherUrl);
        const response_data = await response.json();
        console.log(response_data);
        const dict = {
            "location": response_data.location,
            "temp_f": response_data.temp_f,
            "temp_c": response_data.temp_c,
            "wind_mph": response_data.wind_mph,
            "gust_mph": response_data.gust_mph,
            "wind_kph": response_data.wind_kph,
            "gust_kph": response_data.gust_kph,
            "icon": response_data.icon,
            "wind_dir": response_data.wind_dir,
            "seven_day": response_data.seven_day
        }
        setData(dict);
        setLoading(false);
        
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            currentWeather(lat, long);
        });
    },[]);

    return (
        <Row xs={1} md={2} className="g-4">
            <Col key={1}>
                <WeatherCard 
                    data={data} 
                    loading={[loading, setLoading]} 
                />
                <StocksCard data={data} />
            </Col>
        </Row>
    )
}

export default Home;
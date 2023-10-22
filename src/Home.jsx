import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WeatherCard from './WeatherCard';

const Home = () => {
    return (
        <Row xs={1} md={2} className="g-4">
            <Col key={1}>
                <WeatherCard />
            </Col>
        </Row>
    )
}

export default Home;
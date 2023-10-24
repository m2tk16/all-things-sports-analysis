import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Arc from './LoadingArc';

interface WeathercardProps {
    data: any;
    loading: any;
}

const WeatherCard = (props: WeathercardProps) => {
    const { data, loading } = props;
    const titles = ['Day', 'Low', 'High', '% Rain'];

    return (
        <>
            {loading[0] ? <Arc /> : 
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{data.location} | Weather
                            <hr className="card-hr"></hr>
                        </Card.Title>
                        <Row xs={1} md={2} className="g-4 weather-header-row">
                            <Col key={1} xs={2}>
                                Now:
                            </Col>
                            <Col key={1} xs={10}></Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                            <Col key={1} xs={4}>
                                <Image src={data.icon} roundedCircle />
                                <div className="current-temp">{data.temp}</div>
                           </Col>
                            <Col key={3} xs={4}>
                                <div className="current-weather-title">Wind MPH</div>
                                <div className="weather-details-box">{data.wind_mph}</div>
                            </Col>
                            <Col key={4} xs={4}>
                                <div className="current-weather-title">Gust MPH</div>
                                <div className="weather-details-box">{data.gust_mph}</div>
                            </Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                            <Col key={2} md={12}>
                                <Row xs={1} md={8} className="g-4 seven-day-header">
                                    {titles.map((title, index) => (
                                    <Col className="seven-day-column" key={title} xs={3}>
                                        {title}
                                    </Col>
                                    ))}
                                </Row>
                                {Object.keys(data.seven_day).map(day => (
                                <Row xs={1} md={4} key={day} className="g-4 weather-row">
                                    {Object.keys(data.seven_day[day]).map(k => (
                                        <Col key={day+k} xs={3}>
                                            {data.seven_day[day][k]}
                                        </Col>
                                    ))} 
                                </Row>
                                ))} 
                            </Col>
                        </Row >
                    </Card.Body>
                </Card>
            }
        </>
    )
}

export default WeatherCard;
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
                            <Col key={1} xs={3}>
                                Now:
                            </Col>
                            <Col key={2} xs={9}></Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                            <Col key={3} xs={4}>
                                <Image src={data.icon} roundedCircle />
                                <div className="current-temp">{data.temp_f}&deg;</div>
                           </Col>
                            <Col key={4} xs={4}>
                                <div className="current-weather-title">Wind MPH</div>
                                <div className="weather-details-box">{data.wind_mph + " " + data.wind_dir}</div>
                            </Col>
                            <Col key={5} xs={4}>
                                <div className="current-weather-title">Gust MPH</div>
                                <div className="weather-details-box">{data.gust_mph + " " + data.wind_dir}</div>
                            </Col>
                        </Row>
                        <Row xs={1} md={3} className="g-4">
                            <Col key={6} md={12}>
                                <Row xs={1} className="g-3 seven-day-header">
                                    {titles.map((title, index) => (
                                    <Col className="seven-day-column" key={title} xs={3}>
                                        {title}
                                    </Col>
                                    ))}
                                </Row>
                                {Object.keys(data.seven_day).map(day => (
                                <Row xs={1} key={day} className="g-3 weather-row">
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
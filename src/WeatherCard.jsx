import React, { useState, useEffect } from "react";
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
    return (
        <>
            {loading[0] ? <Arc /> : 
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">{data.location} | Weather
                            <hr className="card-hr"></hr>
                        </Card.Title>
                        <Row xs={1} md={2} className="g-4 weather-header-row">
                            <Col key={1} xs={4}>
                                Now
                            </Col>
                        </Row>
                        <Row xs={1} md={2} className="g-4">
                            <Col key={1} xs={3}>
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
                            </Col>
                            <Col key={2} xs={8}>
                                <Row xs={1} md={2} className="g-4 seven-day-header">
                                    <Col className="seven-day-column" key={36} xs={3}>Day
                                    </Col>
                                    <Col className="seven-day-column" key={33} xs={3}>Low
                                    </Col>
                                    <Col className="seven-day-column" key={31} xs={3}>High
                                    </Col>
                                    <Col className="seven-day-column" key={83} xs={3}>%Rain
                                    </Col>
                                </Row>
                                <Row xs={1} md={2} className="g-4 weather-row">
                                    {Object.keys(data.day_1).map(key => (
                                        <Col key={3} xs={3}>
                                            {data.day_1[key]}
                                        </Col>
                                    ))} 
                                </Row>
                                <Row xs={1} md={2} className="g-4 weather-row">
                                    {Object.keys(data.day_2).map(key => (
                                        <Col key={3} xs={3}>
                                            {data.day_2[key]}
                                        </Col>
                                    ))} 
                                </Row>
                                <Row xs={1} md={2} className="g-4 weather-row">
                                    {Object.keys(data.day_3).map(key => (
                                        <Col key={3} xs={3}>
                                            {data.day_3[key]}
                                        </Col>
                                    ))} 
                                </Row>
                            </Col>
                        </Row >
                    </Card.Body>
                </Card>
            }
        </>
    )
}

export default WeatherCard;
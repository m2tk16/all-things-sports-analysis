import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Players = () => {
    return (
        <>
        <Row>
            <Col key={"what-is-jarvis-title"} md={12}>
                <div className="home-title">
                    About The Jarvis App
                </div>
            </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
            <Col key={"what-is-jarvis-title"} md={6}>
                <Card className="info-card info-card-home">
                    <Card.Body className="card-body">
                            <Card.Title className="card-title">What is the Jarvis App?
                                <hr className="card-hr"></hr>
                            </Card.Title>
                    </Card.Body>
                    <Row xs={1} md={3}>
                        <Col key={"what-is-jarvis-text"} md={12}>
                            <div className="home-card-body-text">
                                Jarvis is a proto type tool being developed by an aspiring
                                developer. The app is a training tool to learning various AWS,
                                servies, languages while having a little fun in doing so. Please
                                leave feedback on how to improve and where there might be learning
                                opportunities.
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
            <Col key={"what-is-jarvis-title"} md={6}>
                <Card className="info-card info-card-home">
                    <Card.Body className="card-body">
                            <Card.Title className="card-title">What is the purpose?
                                <hr className="card-hr"></hr>
                            </Card.Title>
                    </Card.Body>
                    <Row xs={1} md={3}>
                        <Col key={"plans-for-jarvis-text"} md={12}>
                            <div className="home-card-body-text">
                                The plan for this application is to create a one stop shop regarding
                                various interests for a user. In essence, this will be similar to Apples
                                widget console on their devies. At this time there are very limited
                                functionalities however, this is actively being worked on.
                                See the roadmap below.
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        <Row xs={1} md={3} className="g-4">
            <Col key={"what-is-jarvis-title"} md={6}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                            <Card.Title className="card-title">Roadmap
                                <hr className="card-hr"></hr>
                            </Card.Title>
                    </Card.Body>
                    <Row xs={1} md={3}>
                        <Col key={"plans-for-jarvis-text"} md={12}>
                            <div className="home-card-body-text">
                            November:
                                <ul>
                                    <li>
                                        Implement hourly weather.
                                    </li>
                                    <li>
                                        Implement stocks.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default Players;

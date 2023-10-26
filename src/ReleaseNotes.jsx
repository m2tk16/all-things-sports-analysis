import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const ReleaseNotes = () => {
    return (
        <Row>
            <Col key={1} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">October Update Notes
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-date">2023-10-25:</Col>
                            </Row>
                            <Row>
                                <Col className="release-notes-text">
                                    Implemented inital settings for a specific user. On the "Settings" route, a
                                    user may now toggle between Farenheit/Celcius or MPH/KPH. As of now the 
                                    toggle only stores the curent users setting, however next steps of implementation
                                    are to load the settings into Jarvis and provide the degree type or speed for weather.
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default ReleaseNotes;
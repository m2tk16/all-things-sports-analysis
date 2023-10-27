import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const ReleaseNotes = () => {
    return (
        <>
        <Row>
            <Col key="relase-notes-page-title" md={12}>
                <div className="relase-notes-page-title">
                    Release Notes
                </div>
            </Col>
        </Row>
        <Row>
            <Col key={20231025} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-25
                            <hr className="card-hr"></hr>
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
        <Row>
            <Col key={20231027} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-27
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    Updated the icon that displays in the browswer tab to a 
                                    AI generated version of Vision / Iron man to create a
                                    version of them combined. Also, updated the release notes
                                    to allow mulitple cards to be displayed.
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>
    )
}

export default ReleaseNotes;

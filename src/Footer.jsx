import React from "react";
import { Link } from 'react-router-dom';

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Envelope } from 'react-bootstrap-icons';

const Footer = () => {

    return (
        <div className="footer-wrapper">
            <hr className="card-hr"></hr>
            <Row>
                <Col key={"contact"} lg={12}>
                    <Card className="info-card">
                        <Card.Body className="card-body">
                            <Row>
                                <Col key={"padding-links"} xs={4}>
                                    <b>About</b>
                                </Col>    
                                <Col key={"links"} xs={3}>
                                    <b>Links</b>
                                </Col>    
                                <Col key={"contact"} xs={5}>
                                    <b>Contact</b>
                                </Col>      
                            </Row>
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col key={"padding-contact"} xs={4}>
                                    This website is being built for learning purposes utilized
                                    by friends & family.

                                </Col>
                                <Col key={"home"} xs={3}>
                                    <Row>
                                        <Link 
                                            to="https://thejarvisapp.com" 
                                            className="footer-link" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Home</Link>
                                    </Row>
                                    <Row>
                                        <Link 
                                            to="https://thejarvisapp.com/jarvis" 
                                            className="footer-link" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Jarvis</Link>
                                    </Row>
                                    <Row>
                                        <Link 
                                            to="https://thejarvisapp.com/settings" 
                                            className="footer-link" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Settings</Link>
                                    </Row>
                                    <Row>
                                        <Link 
                                            to="https://thejarvisapp.com/release-notes" 
                                            className="footer-link" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                        >Release Notes</Link>
                                    </Row>
                                </Col>    
                                <Col key={"coemialntact"} xs={5}>
                                    <Envelope />
                                    thejarvisapp<br></br>
                                    @gmail
                                </Col>      
                            </Row>
                        </Card.Body>
                    </Card>s
                </Col>
            </Row>
        </div>
    )
}

export default Footer;

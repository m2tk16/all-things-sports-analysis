import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


interface SettingsProps {
    user: string;
}


const Settings = (props: SettingsProps) => {
    // const { user } = props;
    const user = 'm2tk16@gmail.com'
    const settingsUrl = "https://q0ll8gvj51.execute-api.us-west-2.amazonaws.com/GetJarvisSettings/getJarvisUserSettings"
    const [settingsData, setSettingsData] = useState({})


    useEffect(() => {
        const GetSettings = async () => {
            const header = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "login": user, 
                    "request_type": "LOAD"
                })
            }
            await fetch(settingsUrl, header)
                .then(response => response.json())
                .then(response => {
                    const data = JSON.parse(response.body)
                    setSettingsData(data)
                });
            };
            GetSettings()
    },[]);
 

    const UpdateSettings = (key) => {
        const header = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "login": user, 
                "request_type": "UPDATE",
                "key": key,
            })
        }

        fetch(settingsUrl, header)
            .then(response => response.json())
            .then(response => {
                const data = JSON.parse(response.body)
                const d = {
                    "login": user,
                    "weather": {
                        "temperature": data.temperature,
                        "speed": data.speed
                    }
                }
                setSettingsData(d.weather)
            });
        };


    
    return (
        <Row>
            <Col>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">
                            Weather Settings
                            <hr className="card-hr"></hr>
                        </Card.Title>
                        <Form>
                            <Form.Check
                                key="weather-temp-toggle"
                                type="switch"
                                id="custom-switch"
                                label={settingsData.temperature}
                                className="settings-toggle"
                                onClick={() => UpdateSettings('temperature')}
                            />
                            <Form.Check
                                key="weather-speed-toggle"
                                type="switch"
                                id="custom-switch"
                                label={settingsData.speed}
                                className="settings-toggle"
                                onClick={() => UpdateSettings('speed')}
                            />
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="card-title">
                            Stock Settings
                            <hr className="card-hr"></hr>
                        </Card.Title>
                        Stock settings
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Settings;
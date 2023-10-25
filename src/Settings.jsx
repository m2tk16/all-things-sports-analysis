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
    const [settingsData, setSettingsData] = useState({})

    useEffect(() => {
        const GetSettings = async () => {
            const settingsUrl = "https://q0ll8gvj51.execute-api.us-west-2.amazonaws.com/GetJarvisSettings/getJarvisUserSettings"
            const header = {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({"login": user})
            }
                
            await fetch(settingsUrl, header)
                .then(response => response.json())
          
                .then(response => {
                    const data = JSON.parse(response.body)
                    console.log(data)
                    setSettingsData(data)
                });
            };
            GetSettings()
    },[]);
    console.log(settingsData)
 
    const [settings, setSettings] = useState({
        "login": user,
        "weather": {
            "temperature": settingsData.temperature,
            "speed": settingsData.speed
        }
    });

    
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
                            />
                            <Form.Check
                                key="weather-speed-toggle"
                                type="switch"
                                id="custom-switch"
                                label={settingsData.speed}
                                className="settings-toggle"
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
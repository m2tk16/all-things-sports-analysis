import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';



interface SettingsProps {
    user: string
}


const Settings = (props: SettingsProps) => {
    const { user } = props;

    const settingsUrl = "https://q0ll8gvj51.execute-api.us-west-2.amazonaws.com/GetJarvisSettings/getJarvisUserSettings"
    const firstNameUrl = "https://t2s5cjehp3.execute-api.us-west-2.amazonaws.com/dev/updateJarvisFirstName"
    const [settingsData, setSettingsData] = useState({})
    const [showUpdateToast, setShowUpdateToast] = useState(false)
    const [firstName, setFirstName] = useState("")

    const closeToast = () => {
        setShowUpdateToast(false)
    }

    useEffect(() => {
        const GetSettings = async () => {
            const header = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "login": props.user, 
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
    },[props.user]);
 

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


    const updateFirstName = (user, firstName) => {
        const header = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "login": user, 
                "first_name": firstName
            })
        }
        fetch(firstNameUrl, header)
        setShowUpdateToast(true);
        };

    
    return (
        <>
        <Row>
            <Col key={"update-toast"} sm={12}>
                <Toast 
                    className="setings-update-toast"
                    autohide="true" 
                    bg="custom" 
                    animation="true" 
                    show={showUpdateToast}
                    onClose={closeToast}
                >
                    <Toast.Header>
                        <strong className="me-auto">SUCCESS</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Congrats, {firstName}! You have successfully updated your first name
                    </Toast.Body>
                </Toast>
            </Col>
        </Row>
        <Row>
            <Col key={"fist-name"} sm={6}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Form>
                            <Card.Title className="card-title">
                                <Row>
                                    <Col xs={8}>
                                        First name
                                    </Col>
                                    <Col xs={4}>
                                        <Button 
                                            variant="outline-info" 
                                            onClick={() => updateFirstName(user, firstName)}
                                        >Update
                                        </Button>
                                    </Col>
                                </Row>
                                <hr className="card-hr"></hr>
                            </Card.Title>
                            <Row lg={3}>
                                <Col key={"settings-form"} md={12}>
                                    <Form.Group 
                                        className="mb-3" 
                                        controlId="exampleForm.ControlInput1">
                                    <Form.Control 
                                        size="small" 
                                        type="text" 
                                        placeholder="Jarvis"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Form.Group>

                                </Col>
                            </Row>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
            <Col key={"weather-settings-col"} sm={6}>
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
        </Row>
        </>
    )
}

export default Settings;
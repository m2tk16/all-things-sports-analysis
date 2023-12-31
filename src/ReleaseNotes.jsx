import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Footer from "./Footer"


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
            <Col key={20231101} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-11-01
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    <ul>
                                        <li>
                                            Reformatted the stock tickers to include the stock ticker,
                                            company name, price and various other metrics.
                                        </li>
                                        <li>
                                            Added conditional formatting based on % change for the current
                                            day. 
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col key={20231031} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-31
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    <ul>
                                        <li>
                                            Added an initial start for the stock tickers.
                                            Currently, only sample data is hardcoded.
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col key={20231030} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-30
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    <ul>
                                        <li>
                                            Updated the Settings route to now have a toast
                                            generate at the top of the page informating the
                                            user that their first name as been updated.
                                        </li>
                                        <li>
                                            Some minor formatting to allow the changes above.
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col key={20231029} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-29
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    <ul>
                                        <li>
                                            Implemented the F/H MPH/KPH toggle which is loaded 
                                            from the weather settings on the Jarvis Route.
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col key={20231028} md={12}>
                <Card className="info-card">
                    <Card.Body className="card-body">
                        <Card.Title className="release-notes-date">2023-10-28
                            <hr className="card-hr"></hr>
                            <Row>
                                <Col className="release-notes-text">
                                    <ul>
                                        <li>
                                            Added the degree character to the Low & High
                                            fields.
                                        </li>
                                        <li>
                                            Added the userName to the routes: jarvis & settings.
                                        </li>
                                        <li>
                                            Updated the Home route which now displays 3 cards: 
                                            What is The Jarvis Tool, What is the Purpose and 
                                            a mini roadmap.
                                        </li>
                                        <li>
                                            Removed the stock settings placement card in favor of
                                            the first name card.
                                        </li>
                                        <li>
                                            Replaced the hardcoded personal email for the welcome
                                            logo, to the actual logged in user.
                                        </li>
                                        <li>
                                            Added contact email as well as the route links, 
                                            in the footer, for all routes.
                                        </li>
                                    </ul>
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
                                    <ul>
                                        <li>
                                            Updated the icon that displays in the browser tab to an 
                                            AI generated combined version of Vision / Iron.
                                        </li> 
                                        <li>
                                            Updated the release notes
                                            to allow mulitple cards to be displayed.
                                        </li>
                                        <li>
                                            Added a "Welcome EMAIL" to the Navbar.
                                        </li>
                                        <li>
                                            Updated the release notes to allow multiple cards to be displayed.
                                        </li>
                                        <li>
                                            Moved the signout button to the Navbar and improved the formatting.
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Body>
                </Card>
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
        <Footer />
        </>
    )
}

export default ReleaseNotes;

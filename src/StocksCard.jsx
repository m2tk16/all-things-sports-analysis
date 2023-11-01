import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

interface StockCardProps {
    data: any;
}


const StocksCard = (props: StockCardProps) => {
    const { data } = props;
    console.log(data)


    return (
        <>
        <Card className="info-card">
            <Card.Body className="card-body">
                <Card.Title className="card-title">Stocks
                    <hr className="card-hr"></hr>
                </Card.Title>
                <Row md={2} className="g-4 weather-header-row">
                    <Col key={1} md={12}>
          
                        <Accordion className="stock-item">
                            <Accordion.Item eventKey="0" className="stock-item">
                                <Accordion.Header>{"AMZN: Amazon - $132.83"}</Accordion.Header>
                                <Accordion.Body className="stock-item">
                                text
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}

export default StocksCard;
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';




const StocksCard = () => {
    const [data, setData] = useState([])
    const currentStocks = async () => {
        const stocksUrl = "https://t2s5cjehp3.execute-api.us-west-2.amazonaws.com/dev/getStockData"
        console.log(stocksUrl);
        const response = await fetch(stocksUrl);
        const response_data = await response.json();
        const d = JSON.parse(response_data.body);
        setData(d);
    }

    useEffect(() => {
        currentStocks();
    },[]);
    console.log(data);

    return (
        <>
        <Card className="info-card">
            <Card.Body className="card-body">
                <Card.Title className="card-title">Stocks
                    <hr className="card-hr"></hr>
                </Card.Title>
                <Row md={2} className="g-4 weather-header-row">
                    <Col key={1} md={12}>
                 
                    {data.map((stocks, index) => (
                        <Accordion className="stock-item">
                            <Accordion.Item eventKey="0" className="stock-item">
                                <Accordion.Header>{stocks.symbol}  |  ${stocks.market_price}
                                </Accordion.Header>
                                <Accordion.Body className="stock-item">
                                text
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}

export default StocksCard;
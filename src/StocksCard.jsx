import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import styled from "styled-components";
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
 
    const StyledAccordion = styled(Accordion)`
        border: .25px solid #52FEFE;
        border-radius: .36em;
    `;

    const StyledAccordionHeader = styled(Accordion.Header)`
        border: .25px solid rgb(24, 24, 24);;
    `;

    const StyledAccordionItem = styled(Accordion.Item)`
        border: .25px solid rgb(24, 24, 24);;
        background-color: rgb(24, 24, 24);
        color: white;
    `;

    const StyledAccordionBody = styled(Accordion.Body)`
        border: .25px solid #52FEFE;
        font-size: 1em;
        font-weight:400;
    `;
    

    const StockChangeColor = (a, b, c) => {
        if (b >= 0) {
            return <div style={{ color: 'green' }}>{c+a}</div>
        } else {
            return <div style={{ color: 'red' }}>{c+a}</div>
        }
    }

    return (
        <>
        <Card className="info-card">
            <Card.Body className="card-body">
                <Card.Title className="card-title">Stocks
                    <hr className="card-hr"></hr>
                </Card.Title>
                <Row md={2} className="g-4">
                    <Col key={1} md={12}>
                 
                    {data.map((stocks, index) => (
                        <StyledAccordion>
                            <StyledAccordionItem eventKey="0">
                                <StyledAccordionHeader>
                                        <Col key="symbol" xs={8} className="stock-ticker">
                                            <Row>
                                                {stocks.symbol}
                                            </Row>
                                            <Row className="stock-name">
                                                {stocks.shortName}
                                            </Row>
                                        </Col>
                                        <Col key="price" xs={4}>
                                            {StockChangeColor(stocks.regularMarketPrice, stocks.regularMarketChangePercent, "$")}
                                        </Col>
                                </StyledAccordionHeader>
                                <StyledAccordionBody>
                                    <Row>
                                        <Col key="after-hours" xs={5}>
                                            After Hours:
                                        </Col>
                                        <Col key="post-market-change" xs={3}>
                                            {StockChangeColor(stocks.postMarketChange, stocks.postMarketChangePercent, "$")}
                                        </Col>
                                        <Col key="post-market-change-perc" xs={3}>
                                            {StockChangeColor(stocks.postMarketChangePercent, stocks.postMarketChangePercent, "%")}
                                        </Col>
                                    </Row>
                                    <hr></hr>
                                    <Row>
                                        <Col key="open-label" xs={4}>
                                            Open:
                                        </Col>
                                        <Col key="open-price" xs={4}>
                                            ${stocks.regularMarketOpen}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key="stock-price-label" xs={4}>
                                            High:
                                        </Col>
                                        <Col key="stock-high-price" xs={4}>
                                            ${stocks.regularMarketDayHigh}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key="close-label" xs={4}>
                                            Close:
                                        </Col>
                                        <Col key="close-price" xs={4}>
                                            ${stocks.regularMarketPrice}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key="52w-price-label" xs={4}>
                                            52W L:
                                        </Col>
                                        <Col key="52w-high-price" xs={4}>
                                            ${stocks.fiftyTwoWeekLow}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key="52w-avg-label" xs={4}>
                                            52W Avg:
                                        </Col>
                                        <Col key="52w-avg-price" xs={4}>
                                            ${stocks.fiftyDayAverage}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col key="52w-h-label" xs={4}>
                                            52W H:
                                        </Col>
                                        <Col key="52w-h-price" xs={4}>
                                            ${stocks.fiftyTwoWeekHigh}
                                        </Col>
                                    </Row>
                                </StyledAccordionBody>
                            </StyledAccordionItem>
                        </StyledAccordion>
                    ))}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
        </>
    )
}

export default StocksCard;
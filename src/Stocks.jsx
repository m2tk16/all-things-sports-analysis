import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Card from 'react-bootstrap/Card';

const StocksCard = () => {
    return (
        <>
            <Card className="info-card">
                <Card.Body className="card-body">
                    <Card.Title className="card-title">Stocks
                        <hr className="card-hr"></hr>
                        Apple
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default StocksCard;
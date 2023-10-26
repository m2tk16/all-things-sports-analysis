import React from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Card from 'react-bootstrap/Card';

interface StocksCardProps {
    data: any;
}

const StocksCard = (props: StocksCardProps) => {
    const { data } = props;

    return (
        <>
            <Card className="info-card">
                <Card.Body className="card-body">
                    <Card.Title className="card-title">Stocks
                        <hr className="card-hr"></hr>
                        {data.location}
                    </Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default StocksCard;
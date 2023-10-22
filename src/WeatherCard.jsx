import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';




const WeatherCard = (props: data) => {
    console.log("-----------")
    const { data } = props;
    return (
        <Card className="info-card">
            <Card.Body className="card-body">
            <Card.Title className="card-title">{data.location} | Weather
            <hr className="card-hr"></hr></Card.Title>
            <div className="weather-details-box">
                <Image src={data.icon} roundedCircle />
            </div>
            <div className="weather-details-box">
                <Card.Text>{data.temp}</Card.Text>
            </div>
            <div className="weather-details-box">
                <Card.Text>{data.wind_mph}</Card.Text>
            </div>
            <div className="weather-details-box">
                <Card.Text>{data.gust_mph}</Card.Text>
            </div>
            </Card.Body>
        </Card>
    )
}

export default WeatherCard;
import React from 'react';
import {Card , Button} from 'react-bootstrap';

const PlayerDetails = (props) => {
    const selectedPlayers = props.selectedPlayers;
    const { title, description, image, price } = props.players;
    return (
        <div className = "col-md-4">
            <Card  style={{ width: '100%', border: '3px solid black',margin:" 10px",borderRadius: '10px' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>Players Name: {title}</Card.Title>
                    <Card.Text>
                        Players Description: {description}
                    </Card.Text>
                    <Card.Text>
                        Sallary: {price}
                    </Card.Text>
                    <Button variant="primary" onClick={() => selectedPlayers(props.players)}>Add Player</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerDetails;
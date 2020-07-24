import React from 'react';
import { Container, Jumbotron, Button, Card } from 'react-bootstrap';

export default function Greetings() {
    return (
        <Container>
            <Card className="text-center mt-3">
                <Card.Img variant="top" style={{ objectFit: "Contain", height: "400px" }} src="img/banner.jpg" />
                <Card.Body>
                    <Card.Text>
                        <h1>Greetings ! I'am Vicky Ardian</h1>
                        <h5><i>---- as Front End Dev & UI/UX Designer ----</i></h5>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. Some quick example text to build on the card title and make up the bulk
                        of the card's content.Some quick example text to build on the card title and make up the bulk
                        of the card's content.Some quick example text to build on the card title and make up the bulk
                        of the card's content.Some quick example text to build on the card
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="mr-3">Twitter @ardian708</Button>
                    <Button className="mr-3" variant="warning">IG @ardian708</Button>
                    <Button variant="danger">Email ardian708@gmail.com</Button>
                </Card.Footer>
            </Card>
        </Container >
    )
}
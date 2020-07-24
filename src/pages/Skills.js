import React from 'react';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from 'react-router-dom';
import { Container, Col, Row, Button, Jumbotron, Card, CardGroup } from 'react-bootstrap';
import ContentDetail from './ContentDetail'

// ! Menggunakan Hooks (Nilai plus jika ada Custom Hooks).
// ! Website mengandung beberapa page dengan routing menggunakan React Router (react-router-dom).

export default function Skills() {
    let match = useRouteMatch();
    return (
        <Container className="mt-3">
            <Jumbotron>
                <h1>Let see what my skills are</h1>
                <Row className="pt-3" >
                    <Col>
                        <CardGroup className="text-center">
                            <Card >
                                <Card.Img style={{ objectFit: "Contain", height: "200px" }} variant="top" src="/img/skill1.png" />
                                <Card.Body>
                                    <Card.Title>Design</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`${match.url}/Design`}>
                                        <Button style={{ textDecoration: "none" }} variant="primary" block>Go Inside</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{ objectFit: "Contain", height: "200px" }} variant="top" src="/img/skill2.png" />
                                <Card.Body>
                                    <Card.Title>Programming</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer. </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`${match.url}/Program`}>
                                        <Button variant="primary" block>Go Inside</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img style={{ objectFit: "Contain", height: "200px" }} variant="top" src="/img/skill3.png" />
                                <Card.Body>
                                    <Card.Title>Framework</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to={`${match.url}/Framework`}>
                                        <Button variant="primary" block>Go Inside</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                </Row>
            </Jumbotron>

            <Switch>
                <Route path={`${match.url}/:contentId`}>
                    <ContentDetail />
                </Route>
            </Switch>
        </Container >
    )
}
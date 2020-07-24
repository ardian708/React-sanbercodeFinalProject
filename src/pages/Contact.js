import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';

// !Terdapat form (boleh Uncontrolled maupun controlled)
// !Menggunakan State Management, boleh pilih antara Context API atau Redux, maupun keduanya.

class CurrencyInput extends React.Component {
    _handleCurrencyChange = (e) => {
        this.props.onChangeCurrency(e.target.value);
    }
    render() {
        const { currency, curLabel } = this.props;
        return (
            <>
                <input type="number" value={currency} onChange={this._handleCurrencyChange} />
            </>
        )
    }
}

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", phone: "", company: "", rupiah: 0, dollar: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeRupiah = (rupiah) => {
        let dollar = (parseFloat(rupiah) / 14272.85).toString();
        this.setState({ rupiah, dollar });
    }

    onChangeDollar = (dollar) => {
        let rupiah = (parseFloat(dollar) * 14272.85).toString();
        this.setState({ rupiah, dollar });
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        const { email, phone, company } = this.state;
        alert(
            `Request was submitted ! \n email => ${email} \n phone => ${phone} \n company => ${company} \n`
        );
    }

    render() {
        const { email, phone, company, rupiah, dollar } = this.state;
        return (
            <Container className="pt-3">
                <Row>
                    <Col sm={2}>
                    </Col>
                    <Col sm={8}>
                        <Card>
                            <Card.Img variant="top" src="img/content.png" />
                            <Card.Header>
                                <Card.Title className="text-center">
                                    <h2>Request a Project here ... </h2>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="pl-5 pr-5 pb-5">
                                <Card.Text>
                                    <Form onSubmit={this.handleSubmit}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email"
                                                name="email"
                                                value={email}
                                                onChange={this.handleChange} />
                                            <Form.Text className="text-muted">
                                                We'll never share your email & phone number with anyone else.
                                        </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicText">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="Phone Number"
                                                name="phone"
                                                value={phone}
                                                onChange={this.handleChange} />
                                        </Form.Group>

                                        <Form.Group controlId="formBasicText">
                                            <Form.Label>Company</Form.Label>
                                            <Form.Control type="text" placeholder="Your Company"
                                                name="company"
                                                value={company}
                                                onChange={this.handleChange} />
                                        </Form.Group>
                                        <Row>
                                            <Col>
                                                <Form.Group controlId="formBasicNumber">
                                                    <Form.Label>Estimated Budget</Form.Label>
                                                    {/* <Form.Control type="text" placeholder="Rupiah Currency"
                                                        name="rupiah"
                                                        value={rupiah}
                                                        onChange={this.handleChange} /> */}
                                                    <CurrencyInput curLabel="Rp"
                                                        currency={rupiah}
                                                        onChangeCurrency={this.onChangeRupiah} />
                                                    <Form.Text className="text-muted">
                                                        RUPIAH
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                            <Col>
                                                <Form.Group controlId="formBasicNumber">
                                                    <Form.Label style={{ color: "#FFF" }}>Estimated Budget</Form.Label>
                                                    {/* <Form.Control type="text" placeholder="Dollar Currency"
                                                        name="dollar"
                                                        value={dollar}
                                                        onChange={this.handleChange} /> */}
                                                    <CurrencyInput curLabel="$"
                                                        currency={dollar}
                                                        onChangeCurrency={this.onChangeDollar} />
                                                    <Form.Text className="text-muted">
                                                        DOLLAR
                                                    </Form.Text>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Button variant="dark" block type="submit">
                                            Send Request
                                        </Button>
                                    </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={2}>
                    </Col>
                </Row>
            </Container >
        )
    }
}
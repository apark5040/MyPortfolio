import React, { Component } from "react";
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Arrow from "../../components/Arrow";
import "./Contact.scss";

class Contact extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={{ size: 10, offset: 1 }}>
                            <div className="contactText text-center">
                                <h1>Contact info</h1>
                                <p>If you are looking for a developer that loves to create things with passion, please contact me!</p>
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">Email</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="Enter your email here" />
                                    </FormGroup>

                                    <FormGroup>
                                        <Label for="exampleText">Text Area</Label>
                                        <Input type="textarea" name="text" id="exampleText" />
                                    </FormGroup>
                                    <Button>Submit</Button>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Contact;
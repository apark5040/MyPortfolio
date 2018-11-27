import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Character extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="2" />
                        <Col md="2">
                        <h1>Hello</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Character;
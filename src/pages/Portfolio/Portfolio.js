import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Arrow from "../../components/Arrow";

class Portfolio extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md="4" sm="4" xs="4"><Arrow direction="left" link="/about">About</Arrow></Col>
                    <Col md="4" sm="4" xs="4">
                        <h1>Portfolio</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis ultricies odio id hendrerit. Duis convallis consectetur velit ultricies maximus. Nullam quis sollicitudin orci. Cras sapien nisi, sagittis pellentesque nisl vitae, aliquam accumsan augue. Donec et augue varius nibh malesuada rutrum. Phasellus ut enim a quam vulputate pharetra. Aliquam quis suscipit elit, ac rutrum dui. Donec nec luctus eros. Phasellus convallis maximus neque, quis pulvinar enim.</p>
                    </Col>
                    <Col md="4" sm="4" xs="4"><Arrow direction="right" link="/contact">Contact</Arrow></Col>
                </Row>
            </Container>
        );
    }
}

export default Portfolio;
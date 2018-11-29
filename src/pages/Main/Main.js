import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Arrow from "../../components/Arrow";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4" sm="4" xs="4"><Arrow direction="left" link="/about">About</Arrow></Col>
                        <Col md="4" sm="4" xs="4"/>
                        <Col md="4" sm="4" xs="4"><Arrow direction="right" link="/contact">Contact</Arrow></Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <h1 className="text-center" >Andrew Park</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4" />
                        <Col md="1" />
                        <Col md="2">
                            <Arrow direction="down" link="/portfolio">Portfolio</Arrow>
                        </Col>
                        <Col md="2" />
                        <Col md="4" />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
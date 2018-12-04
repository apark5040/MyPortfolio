import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Arrow from "../../components/Arrow";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="2" sm="2" xs="2"><Arrow direction="left" link="/about">About</Arrow></Col>
                        <Col md="8" sm="8" xs="8"/>
                        <Col md="2" sm="2" xs="2"><Arrow direction="right" link="/contact">Contact</Arrow></Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 4, offset: 4 }}>
                            <h1 className="text-center" >Andrew Park</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ size: 'auto', offset: 5 }}>
                            <Arrow direction="down" link="/portfolio">Portfolio</Arrow>
                        </Col>  
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
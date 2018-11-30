import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
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
                        <Col sm="12" md={{ size: 5, offset: 3 }}>
                            <h1 className="text-center" >Andrew Park</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" xs={{ size: 5, offset: 5 }}>
                            <Arrow direction="down" link="/portfolio">Portfolio</Arrow>
                        </Col>  
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
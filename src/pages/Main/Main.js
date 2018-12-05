import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Arrow from "../../components/Arrow";
import "./Main.scss";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={{ size: 2, offset: 1 }}><Arrow direction="left" link="/about">About</Arrow></Col>
                        <Col xs={{ size: 2, offset: 6 }}><Arrow direction="right" link="/contact">Contact</Arrow></Col>
                    </Row>
                    <Row>
                        <Col md={{ size: 4, offset: 4 }}>
                            <h1 className="text-center" id="name" >Andrew Park</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ size: 2, offset: 6 }}>
                            <Arrow direction="down" link="/portfolio">Portfolio</Arrow>
                        </Col>  
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
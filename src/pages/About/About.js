import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Arrow from "../../components/Arrow";
import "./About.scss";

class About extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4" />
                        <Col md="4">
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis ultricies odio id hendrerit. Duis convallis consectetur velit ultricies maximus. Nullam quis sollicitudin orci. Cras sapien nisi, sagittis pellentesque nisl vitae, aliquam accumsan augue. Donec et augue varius nibh malesuada rutrum. Phasellus ut enim a quam vulputate pharetra. Aliquam quis suscipit elit, ac rutrum dui. Donec nec luctus eros. Phasellus convallis maximus neque, quis pulvinar enim.</p>
                        </Col>
                        <Col md="4" sm="4" xs="4"><Arrow direction="right" link="/contact">Contact</Arrow></Col>
                    </Row>
                    <Row>
                    <Col sm="12" xs={{ size: 5, offset: 5 }}>
                        <Arrow direction="down" link="/portfolio">Portfolio</Arrow>
                    </Col>
                </Row>
                </Container>
            </div>
        )
    }
}

export default About;
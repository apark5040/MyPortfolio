import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class About extends Component {

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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis ultricies odio id hendrerit. Duis convallis consectetur velit ultricies maximus. Nullam quis sollicitudin orci. Cras sapien nisi, sagittis pellentesque nisl vitae, aliquam accumsan augue. Donec et augue varius nibh malesuada rutrum. Phasellus ut enim a quam vulputate pharetra. Aliquam quis suscipit elit, ac rutrum dui. Donec nec luctus eros. Phasellus convallis maximus neque, quis pulvinar enim.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;
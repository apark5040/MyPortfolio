import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import Arrow from "../../components/Arrow";

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md="4" ><Arrow direction="left">About</Arrow></Col>
                        <Col md="3">
                            <h1>Main Page</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
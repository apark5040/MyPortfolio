import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import { Spring } from "react-spring";
import Skills from "./Skills.json";
import "./About.scss";

class About extends Component {

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="aboutText" xs={{ size: 4, offset: 1 }}>
                            <div class="screw top-left"></div>
                            <div class="screw top-right"></div>
                            <div class="screw bottom-left"></div>
                            <div class="screw bottom-right"></div>

                            <h1 className="size-decrease">About me</h1>
                            <p>My name is Andrew Park.</p>
                        </Col>
                        <Col xs={{ size: 6, offset: 1 }}>
                            <div className="skills">

                                <div class="screw top-left"></div>
                                <div class="screw top-right"></div>
                                <div class="screw bottom-left"></div>
                                <div class="screw bottom-right"></div>
                                <h1 className="text-center">Skills</h1>
                                {Skills.map(skills => {
                                    return (
                                        <div key={skills.id}>
                                            <div className="text-center">{skills.name}</div>
                                            <Spring
                                                from={{ value: 0 }}
                                                to={{ value: skills.number }}
                                                config={{ delay: skills.time }}>
                                                {props => <Progress color="info" value={props.value} />
                                                }
                                            </Spring>
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default About;
import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import { Spring } from "react-spring";
import Skills from "./Skills.json";
import "./About.scss";

class About extends Component {

    componentDidMount() {
        // document.body.style.overflow = "";
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="aboutText" xs={{ size: 4, offset: 1 }}>
                            <div className="screw top-left"></div>
                            <div className="screw top-right"></div>
                            <div className="screw bottom-left"></div>
                            <div className="screw bottom-right"></div>

                            <h1 className="text-center">About me</h1>
                            <p>My name is Andrew Park. I have a bachelor's degree in Mathematics with concentration in Actuarial Science. 3 years after college, I started studying web development at Georgia Institute of Technology and decided that I wanted to pursue this career. I am passionate, a quick learner, and always willing to go the extra mile to learn more!</p>
                        </Col>
                        <Col xs={{ size: 6, offset: 1 }}>
                            <div className="skills">

                                <div className="screw top-left"></div>
                                <div className="screw top-right"></div>
                                <div className="screw bottom-left"></div>
                                <div className="screw bottom-right"></div>
                                <h1 className="text-center">Skills</h1>
                                {Skills.map(skills => {
                                    return (
                                        <div className="skillItem" key={skills.id}>
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
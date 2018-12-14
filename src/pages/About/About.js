import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import { Spring } from "react-spring";
import "./About.scss";

class About extends Component {

    state = {
        skills: [
            {
                id: 1,
                name: "HTML",
                number: 80,
                time: 0
            },
            {
                id: 2,
                name: "CSS",
                number: 60,
                time: 200
            },
            {
                id: 3,
                name: "JavaScript/jQuery",
                number: 70,
                time: 400
            },
            {
                id: 4,
                name: "Bootstrap",
                number: 80,
                time: 600
            },
            {
                id: 5,
                name: "React.js",
                number: 50,
                time: 800
            },
            {
                id: 6,
                name: "Node.js",
                number: 50,
                time: 1000
            },
            {
                id: 7,
                name: "SQL",
                number: 45,
                time: 1200
            },
            {
                id: 8,
                name: "MongoDB",
                number: 60,
                time: 1400
            }
        ]
    }

    componentDidMount() {

    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col className="aboutText" xs={{ size: 4, offset: 1 }}>
                            <h1 className="size-decrease">About me</h1>
                            <p>My name is Andrew Park.</p>
                        </Col>
                        <Col xs={{ size: 6, offset: 1 }}>
                            <div className="skills">
                                <h1 className="text-center">Skills</h1>
                                {this.state.skills.map(skills => {
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
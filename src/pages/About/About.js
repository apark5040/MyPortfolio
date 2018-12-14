import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import { Spring } from "react-spring";
import "./About.scss";

class About extends Component {

    state = {
        skills: [
            {
                name: "HTML",
                number: 80
            },
            {
                name: "CSS",
                number: 60
            },
            {
                name: "JavaScript/jQuery",
                number: 70
            },
            {
                name: "Bootstrap",
                number: 80
            },
            {
                name: "React.js",
                number: 50
            },
            {
                name: "Node.js",
                number: 50
            },
            {
                name: "SQL",
                number: 45
            },
            {
                name: "MongoDB",
                number: 60
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
                        <Col xs={{ size: 4, offset: 1 }}>
                            <div className="aboutText">
                                <h1>About me</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis ultricies odio id hendrerit. Duis convallis consectetur velit ultricies maximus. Nullam quis sollicitudin orci. Cras sapien nisi, sagittis pellentesque nisl vitae, aliquam accumsan augue. Donec et augue varius nibh malesuada rutrum. Phasellus ut enim a quam vulputate pharetra. Aliquam quis suscipit elit, ac rutrum dui. Donec nec luctus eros. Phasellus convallis maximus neque, quis pulvinar enim.</p>
                            </div>
                        </Col>
                        <Col xs={{ size: 6, offset: 1 }}>
                            <div className="skills">
                                <h1 className="text-center">Skills</h1>
                                {this.state.skills.map(skills => {
                                    return (
                                        <div>
                                            <div className="text-center">{skills.name}</div>
                                            <Spring
                                                from={{ value: 0 }}
                                                to={{ value: skills.number }}>
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
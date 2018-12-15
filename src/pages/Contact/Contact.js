import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Contact.scss";

class Contact extends Component {

    componentDidMount(){
        document.body.style.overflow = "hidden";
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={{ size: 10, offset: 1 }}>
                            <div className="contactText text-center">

                                <div class="screw top-left"></div>
                                <div class="screw top-right"></div>
                                <div class="screw bottom-left"></div>
                                <div class="screw bottom-right"></div>

                                <h1>Contact info</h1>
                                <p>If you are looking for a developer that loves to create things with passion, please contact me!</p>

                                <p className="email">Email: <a href="mailto:apark11278@gmail.com">apark11278@gmail.com</a></p>

                                <a href="mailto:apark11278@gmail.com">
                                    <img src={require("./linkedin.png")} className="linkedinLogo" alt="linkedin" />
                                </a>

                            </div>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Contact;
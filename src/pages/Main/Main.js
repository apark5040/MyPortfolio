import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Arrow from "../../components/Arrow";
import "./Main.scss";
import { Transition, animated, config, Spring } from "react-spring";

class Main extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        setTimeout(() => this.setState({ items: ["Andrew"] }), 0);
        setTimeout(() => this.setState({ items: ["Andrew", "Park"] }), 1000)
    }

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Spring config={{ delay: 2000, duration: 2000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                            {props => <Col xs={{ size: 2, offset: 1 }} style={props}><Arrow direction="left" link="/about">About</Arrow></Col>}
                        </Spring>

                        <Spring config={{ delay: 2500, duration: 2000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                            {props => <Col xs={{ size: 2, offset: 6 }} style={props}><Arrow direction="right" link="/contact">Contact</Arrow></Col>}
                        </Spring>
                    </Row>
                    <Row>
                        <Col md={{ size: 4, offset: 4 }}>
                            <Transition
                                native
                                items={this.state.items}
                                from={{ opacity: 0, height: 0, transform: 'scale(2)' }}
                                enter={[{ opacity: 1, height: 'auto' }, { transform: 'scale(1)' }]}
                                leave={[{ transform: 'scale(1)', opacity: 0.5 }, { opacity: 0 }, { height: 0 }]}
                                config={{ ...config.default, precision: 0.01, duration: 500 }}>
                                {item => props => <animated.div style={props} className="item text-center" id="name" children={item} />}
                            </Transition>
                        </Col>
                    </Row>
                    <Row>
                        <Spring config={{ delay: 3000, duration: 2000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
                            {props => <Col xs={{ size: 2, offset: 6 }} style={props}><Arrow direction="down" link="/portfolio">Portfolio</Arrow></Col>}
                        </Spring>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
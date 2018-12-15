import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Main.scss";
import { Transition, animated, config } from "react-spring";

class Main extends Component {

    state = {
        items1: [],
        items2: []
    }

    componentDidMount() {
        setTimeout(() => this.setState({ items1: ["A"] }), 0);
        setTimeout(() => this.setState({ items1: ["A", "n"] }), 200);
        setTimeout(() => this.setState({ items1: ["A", "n", "d"] }), 400);
        setTimeout(() => this.setState({ items1: ["A", "n", "d", "r"] }), 600);
        setTimeout(() => this.setState({ items1: ["A", "n", "d", "r", "e"] }), 800);
        setTimeout(() => this.setState({ items1: ["A", "n", "d", "r", "e", "w"] }), 1000);
        setTimeout(() => this.setState({ items2: [" P"] }), 1200);
        setTimeout(() => this.setState({ items2: [" P", "a"] }), 1400);
        setTimeout(() => this.setState({ items2: [" P", "a", "r"] }), 1600);
        setTimeout(() => this.setState({ items2: [" P", "a", "r", "k"] }), 1800);
    }

    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Transition
                                native
                                items={this.state.items1}
                                from={{ opacity: 0, height: 0, transform: 'scale(2)' }}
                                enter={[{ opacity: 1, height: 'auto' }, { transform: 'scale(1)' }]}
                                leave={[{ transform: 'scale(1)', opacity: 0.5 }, { opacity: 0 }, { height: 0 }]}
                                config={{ ...config.default, precision: 0.01, duration: 500 }}>
                                {item => props => <animated.span style={props} className="name item text-center" id="name" children={item} />}
                            </Transition>

                            <Transition
                                native
                                items={this.state.items2}
                                from={{ opacity: 0, height: 0, transform: 'scale(2)' }}
                                enter={[{ opacity: 1, height: 'auto' }, { transform: 'scale(1)' }]}
                                leave={[{ transform: 'scale(1)', opacity: 0.5 }, { opacity: 0 }, { height: 0 }]}
                                config={{ ...config.default, precision: 0.01, duration: 500 }}>
                                {item => props => <animated.span style={props} className="name item text-center" id="name" children={item} />}
                            </Transition>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
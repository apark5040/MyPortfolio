import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Main.scss";
import { Transition, animated, config, Spring, Trail } from "react-spring";

class Main extends Component {

    state = {
        items: [],
        key: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    componentDidMount() {
        setTimeout(() => this.setState({ items: ["A"] }), 0);
        setTimeout(() => this.setState({ items: ["A", "n"] }), 500);
        setTimeout(() => this.setState({ items: ["A", "n", "d"] }), 1000);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r"] }), 1500);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e"] }), 2000);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e", "w"] }), 2500);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e", "w", " P"] }), 3000);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e", "w", " P", "a"] }), 3500);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e", "w", " P", "a", "r"] }), 4000);
        setTimeout(() => this.setState({ items: ["A", "n", "d", "r", "e", "w", " P", "a", "r", "k"] }), 4500);
    }

    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Transition
                                native
                                items={this.state.items}
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
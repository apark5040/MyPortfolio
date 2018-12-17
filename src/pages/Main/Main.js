import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Main.scss";
import { Transition, animated, config, Spring } from "react-spring";
import Spaceship from "../../components/Spaceship";

class Main extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            items1: [],
            items2: []
        };
    }

    componentDidMount() {
        this._isMounted  = true;

        document.body.style.overflow = "hidden";

        if(this._isMounted){
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
    }

    componentWillUnmount() {
        document.body.style.overflow = "";
        this._isMounted = false;
    }

    render() {

        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={{ size: 10, offset: 2 }}>
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

                    <Row>
                        <Col md={{ size: 4, offset: 4 }}>
                            <Spring
                                from={{ y: 1000 }}
                                to={{ y: 100 }}
                                config={{ duration: 2500 }}>
                                {props => <Spaceship style={{ top: props.y }} />}
                            </Spring>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Main;
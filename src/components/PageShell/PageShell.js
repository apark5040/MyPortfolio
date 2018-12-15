import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Spring } from "react-spring";
import { Container, Col, Row } from "reactstrap";
import Spaceship from "../Spaceship";
import "./PageShell.scss";

const PageShell = Page => {
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={"SlideIn"}
            >
                <Container>
                    <Row>
                        <Col xs={{ size: 12, offset: 0 }}>
                            <Page {...props} />
                        </Col>
                        <Col xs={{ size: 1, offset: 0 }}>
                            <Spring
                                from={{ y: 350 }}
                                to={{ y: -350 }}
                                config={{ duration: 500 }}>
                                {props => <Spaceship style={{ top: props.y, left: -50 }} />}
                            </Spring>
                        </Col>
                    </Row>
                </Container>


            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;
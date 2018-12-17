import React, { Component } from "react";
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import "./Portfolio.scss";

const items = [
    {
        src: require("./images/01.png"),
        altText: 'Trial of Anima',
        caption: 'A MERN stack video game',
        url: "https://trialofanima.herokuapp.com/"
    },
    {
        src: require("./images/02.png"),
        altText: 'Steet Fighter Click Game',
        caption: 'A React front-end memory game',
        url: "https://apark5040.github.io/streetfighter-clicky-game/"
    },
    {
        src: require("./images/03.png"),
        altText: 'NYT Article Search',
        caption: 'A MERN stack website that searches for New York Times ariticles',
        url: "https://calm-castle-84267.herokuapp.com/"
    },
    {
        src: require("./images/04.png"),
        altText: 'Eat-Da-Burger',
        caption: 'A simple application that incorporates SQL and Handlebars',
        url: "https://eat-your-burger.herokuapp.com/"
    },
    {
        src: require("./images/05.png"),
        altText: 'Moodify',
        caption: 'A front-end app that produces playlist based on facial recognition. Does not work due to facial recognition api removing free tier',
        url: "https://github.com/apark5040/Moodify"
    }
];

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {
        document.body.style.overflow = "";
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {

        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <a href={item.url} rel="noopener noreferrer" target="_blank"><img className="image" src={item.src} alt={item.altText} /></a>
                    <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
                </CarouselItem>
            );
        });
        return (
            <Container>
                <Row>
                    <Col xs={{ size: 10, offset: 1 }}>
                        <div className="portfolioText text-center">
                            <style>
                                {
                                    `.custom-tag {
                                max-width: 100%;
                                height: 490px;
                                background: black;
                                padding: 10px;
                                }`
                                }
                            </style>
                            <div className="screw top-left"></div>
                            <div className="screw top-right"></div>
                            <div className="screw bottom-left"></div>
                            <div className="screw bottom-right"></div>
                            <Carousel
                                activeIndex={activeIndex}
                                next={this.next}
                                previous={this.previous}
                            >
                                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                                {slides}
                                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Portfolio;
import React from "react";
import "./Spaceship.scss";

const Spaceship = (props) => {
    return (
        <div className="spaceship" {...props}>
            <div className="body"></div>
            <div id="window"></div>
            <div id="window2"></div>
            <div id="triangle"></div>
            <div id="triangle2"></div>
            <div id="wing"></div>
            <div id="wing2"></div>
            <div id="middle"></div>
            <div id="middle2"></div>
            <div id="fire1"></div>
            <div id="fire2"></div>
        </div>
    )
}

export default Spaceship;
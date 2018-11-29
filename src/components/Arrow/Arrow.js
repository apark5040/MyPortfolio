import React from "react";
import "./Arrow.scss";

const Arrow = props => {
    return (
        <div className="arrowMenu">
            <a className={`alignCenter ${props.direction}`} href={props.link}>
                <span className="arrowShape"></span>
                <span className="arrowShape"></span>
                <span className="arrowShape"></span>
                <span className="arrowShape"></span>
                <p className="text-menu">{props.children}</p>
            </a>
        </div>
    );

}

export default Arrow;
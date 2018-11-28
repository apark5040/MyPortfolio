import React from "react";
import "./Arrow.scss";

const Arrow = props => {
    return (
        <div>
            <button className={`arrowMenu ${ props.direction }`}>
                <span className="arrowShapeLeft"></span>
                <span className="arrowShapeLeft"></span>
                <span className="arrowShapeLeft"></span>
                <span className="arrowShapeLeft"></span>
                <p className="text-menu">{props.children}</p>
            </button>
        </div>
    );

}

export default Arrow;
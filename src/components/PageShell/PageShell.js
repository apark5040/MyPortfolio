import React from "react";
// import logo from "../../react.svg";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./PageShell.css";

const PageShell = Page => {
    return props =>
        <div className="page">
            <ReactCSSTransitionGroup
                transitionAppear={true}
                transitionAppearTimeout={600}
                transitionEnterTimeout={600}
                transitionLeaveTimeout={200}
                transitionName={"SlideIn"}
            >
                {/* <img src={logo} width="100" height="100" alt="" /> */}
                <Page {...props} />
            </ReactCSSTransitionGroup>
        </div>;
};

export default PageShell;
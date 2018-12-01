import React, { Component } from "react";
import "./Nav.scss";
import github from "./github.png";

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            addOpen: ""
        };

        //I will look up why this solves state undefined issue
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    handleCloseMenu() {
        if (this.state.isOpen) {
            this.slideToggle();
        }
        else {
            return;
        }
    }

    slideToggle = () => {

        let initHeight = 220;
        let initWidth = 20;

        const mdiv = document.getElementsByClassName('mobile-header-nav');
        const divStyle = mdiv[0].style;

        var items = document.getElementsByClassName('listItems');
        var itemsStyle = items[0].style;

        if (this.state.isOpen) {
            divStyle.height = '0px';
            itemsStyle.display = "none";

            this.setState({
                isOpen: false,
                addOpen: ""
            });
        }
        else {
            this.setState({
                isOpen: true,
                addOpen: "open"
            });
            divStyle.height = initHeight + 'px';
            divStyle.width = initWidth + 'vw';
            itemsStyle.display = "block";

        }
    }

    render() {
        return (
            <header onClick={this.handleCloseMenu}>
                <nav className="mobile-header-wrap" role="navigation">
                    <ul className="mobile-header-nav">
                        <div className="listItems">
                            <li>
                                <a href="/">Main</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a href="/portfolio">Portfolio</a>
                            </li>
                        </div>
                    </ul>
                </nav>

                <button className={`mobile-menu-toggle nav-menu ${this.state.addOpen}`} onClick={this.slideToggle}>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                </button>
                <a href="/">Home</a>

                <a href="https://github.com/apark5040">
                    <img className="githubImg" src={github} alt="github" />
                </a>
            </header>

        );
    }
}

export default Nav;
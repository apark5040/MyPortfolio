import React, { Component } from "react";
import "./Nav.scss";
import github from "./github.png";
import logo from "./logo.png";

class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            addOpen: ""
        };

        //I will look up why this solves state undefined issue
        this.handleCloseMenu = this.handleCloseMenu.bind(this);
        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    handleCloseMenu() {
        if (this.state.isOpen) {
            this.closeNav();
        }
        else {
            return;
        }
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.body.style.marginLeft = "250px";

        this.setState({isOpen: true, addOpen: "open"});
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0px";
        // document.body.style.marginLeft = "0px";

        this.setState({isOpen: false, addOpen: ""});
    }

    render() {
        return (
            <header onClick={this.handleCloseMenu}>
                <div id="mySidenav" className="sidenav">
                    <button className="closebtn" onClick={this.closeNav}>&times;</button>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact</a>
                </div>

                <button className={`mobile-menu-toggle nav-menu ${this.state.addOpen}`} onClick={this.openNav}>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                </button>
                <a href="/">
                    <img className="logo" src={logo} alt="Andrew" />
                </a>

                <a href="https://github.com/apark5040">
                    <img className="githubImg" src={github} alt="github" />
                </a>
            </header>

        );
    }
}

export default Nav;
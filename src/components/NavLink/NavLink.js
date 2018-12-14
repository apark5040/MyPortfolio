import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./NavLink.scss";

class NavLink extends React.Component {
    render() {
        var isActive = this.context.router.route.location.pathname === this.props.to;
        var className = isActive ? 'nav-active' : '';

        return(
            <Link className={`navLink ${className}`} {...this.props}>
                {this.props.children}
            </Link>
        );
    }
}

NavLink.contextTypes = {
    router: PropTypes.object
};

export default NavLink;
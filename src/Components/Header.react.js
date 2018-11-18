import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    if (this.el.width() < 993) {
      this.el.find(".side-navigation").sideNav({
        edge: "right",
        closeOnClick: true,
        draggable: true
      });
    }
  }

  render() {
    return (
      <div className="ui-header">
        <nav className="nav-header animate bounceIn">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">
              <img src="images/logo.png"/>
            </NavLink>
            <ul className="navigation right hide-on-med-and-down">
              <li>
                <NavLink exact to="/" className="item" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about" className="item" activeClassName="active">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/programme" className="item" activeClassName="active">
                  Programme
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/testimonial" className="item" activeClassName="active">
                  Testimonial
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/blog" className="item" activeClassName="active">
                  Blog
                </NavLink>
              </li>
            </ul>
            <ul className="navigation right hide-on-large-only">
              <li>
                <a data-activates="side-navigation"
                  className="item side-navigation">
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="side-navigation" className="side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/side-navigation.jpg"/>
              </div>
              <a href="/">
                <img className="circle" src="images/profile.jpg"/>
              </a>
              <a href="/">
                <span className="white-text name">Sanjeevi Rajaram</span>
              </a>
              <a href="/">
                <span className="white-text email">
                  sanjeevi.rajaram@gmail.com
                </span>
              </a>
            </div>
          </li>
          <li>
            <NavLink exact to="/about" activeClassName="active">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/programme" activeClassName="active">
              Programme
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/testimonial" activeClassName="active">
              Testimonial
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;

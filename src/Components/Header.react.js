import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    if (this.el.width() < 993) {
      this.el.find(".side-navigation").sideNav({
        edge: "right",
        closeOnClick: true,
        draggable: true
      });
    }
    this.el.find("#header-mail-modal").modal();
    emailjs.init("user_vVFSGdTgGMkzTDrEivdve");
  }

  openModal = () => {
    this.el.find("#header-mail-modal").modal("open");
  }

  handleFieldChange = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  sendMail = () => {
    const {name, email, message} = this.state;
    const template_params = {
      "from_email": email,
      "from_name": name,
      "message_html": "<p>" + message + "</p>"
    };
    const user_params = {
      "from_email": email,
      "from_name": name
    };
    var service_id = "gmail";
    var template_id = "p3_squad";
    if (!this.el.find(".validate").hasClass("invalid") && name && email && message) {
      emailjs.send("gmail", "p3_squad", template_params);
      emailjs.send("gmail", "p3_squad_user", user_params);
      this.el.find("#header-mail-modal").modal("close");
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
              <li>
                <a onClick={this.openModal}>
                  <i className="material-icons">mail</i>
                </a>
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
        <div id="header-mail-modal" className="modal mail-modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row mail-header">
              <h5 className="col s11 m11 l11 header">Send Mail</h5>
              <i className="material-icons modal-close">close</i>
            </div>
            <div className="row">
              <div className="col s12 m12 l12 input-field">
                <i className="material-icons prefix">person</i>
                <input placeholder="Full Name" name="name" type="text" required
                  onChange={this.handleFieldChange} className="validate"/>
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="col s12 m12 l12 input-field">
                <i className="material-icons prefix">phone</i>
                <input placeholder="E-Mail" name="email" type="email" required
                  onChange={this.handleFieldChange} className="validate"/>
                <label htmlFor="email" data-error="This doesn't look like an e-mail">
                  E-Mail
                </label>
              </div>
              <div className="col s12 m12 l12 input-field">
                <textarea name="message" placeholder="Type your message here"
                  onChange={this.handleFieldChange} required
                  className="materialize-textarea validate">
                </textarea>
                <label htmlFor="message">Message</label>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <a className="waves-effect waves-green btn-flat"
              onClick={this.sendMail}>
              Send
            </a>
            <a className="modal-close waves-effect waves-green btn-flat">
              Cancel
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

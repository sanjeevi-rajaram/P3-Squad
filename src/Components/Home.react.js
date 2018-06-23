import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
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
    this.el.find(".parallax").parallax();
    this.el.find("#mail-modal").modal();
    emailjs.init("user_UTwMgKiQQRCc4q7RRqDqi");
  }

  openModal = () => {
    this.el.find("#mail-modal").modal("open");
  }

  handleFieldChange = (event) => {
    let state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  sendMail = () => {
    const {name, email, message} = this.state;
    var template_params = {
       "from_email": email,
       "from_name": name,
       "message_html": "<p>" + message + "</p>"
    };
    var service_id = "gmail";
    var template_id = "p3_squad";
    if (!this.el.find(".validate").hasClass("invalid") && name && email && message) {
      emailjs.send(service_id,template_id,template_params);
      this.el.find("#mail-modal").modal("close");
    }
  }

  render () {
    return (
      <div className="ui-home">
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-1.jpg"/>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">P3-Squad</h2>
            <div className="row">
              <div className="col s12 m4 l3">
                <img className="col s12 m12 l12" src="images/profile.jpg"/>
                <button onClick={this.openModal}
                  className="col s12 m12 l12 btn black mail-button waves-effect waves-light">
                  Contact
                  <i className="material-icons">mail</i>
                </button>
              </div>
              <div className="col s12 m8 l9">
                <p className="grey-text home-content text-darken-3">
                  Sanjeevi Rajaram is the creator of P3 Fitness Squad, whose
                  magic mantra in Life - Pain, Passion and Progress is put to a
                  Productive Practice in this venture. Well Sanjeevi Rajaram is
                  the proud holder of the Prestigious award presented by –
                  ISSA (USA ) :- International Sports Sciences Association,
                  For&nbsp;
                  <span className="bold-text">
                    “Professional  Fitness Trainer“
                  </span>
                  , a certificate of Merit, for the Successful completion of the
                  course of Physical Fitness Training Conducted by them.
                  With amazing persistence
                  during the past 10 years, he struggled and worked any planned.
                  To keep with the modern developments in the field, he is also
                  regularly updating his physical Training expertise, through
                  specialized programme of&nbsp;
                  <span className="bold-text">
                    “Pilates Training“
                  </span>
                  &nbsp;from GAYO FITNESS
                  ACADEMY, Mumbai in order to train its members with the latest
                  advances in the Art and Science of Physical fitness.
                </p>
              </div>
            </div>
          </div>
          <div className="row container">
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-pain.jpg"/>
                  <div className="card-title">
                    PAIN
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-passion.jpg"/>
                  <div className="card-title">
                    PASSION
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-progress.jpg"/>
                  <div className="card-title">
                    PROGRESS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-2.jpg"/>
          </div>
        </div>
        <div id="mail-modal" className="modal mail-modal modal-fixed-footer">
          <div className="modal-content">
            <div className="row mail-header">
              <h5 className="col s11 m11 l11 header">Send Mail</h5>
              <i className="material-icons modal-close">close</i>
            </div>
            <div className="row">
              <div className="col s12 m12 l12 input-field">
                <i className="material-icons prefix">person</i>
                <input placeholder="Name" name="name" type="text" required
                  onChange={this.handleFieldChange} className="validate"/>
                <label htmlFor="name">First Name</label>
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

export default Home;

import React from "react";
import ReactDOM from "react-dom";

class Faq extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div className="ui-faq">
        <div className="container">
          <h4 className="faq-text">Testimonial</h4>
          <div className="row">
            <div className="col s12 m12 l12 testimonial-container">
              <img src="images/testimonial-1.jpg" className="col s12 m6 l4"/>
              <div className="col s12 m6 l8">
                <p className="content">
                  It's not that some people have will Power and Some Don't....
                  Its that Some People are Ready to change and others are not...
                  He did it....there is no magic pills , No banded subtance,
                  only proper Nutrition and Hard work with dedication....
                  R u ready to knock our door with dedication we did it...
                </p>
                <p className="author">Gold king (Thangaraj)</p>
              </div>
            </div>
            <div className="col s12 m12 l12 testimonial-container">
              <div className="col s12 m6 l8">
                <p className="content">
                  Never bother about your Past be focus on your Future....
                  Never Give up...
                  this Transform givea lot of Pain but feel and love it...
                  No shortcut its time to grown. Never GiveUp.....
                </p>
                <p className="author">Sanjeevi Rajaram</p>
              </div>
              <img src="images/testimonial-2.jpg" className="col s12 m6 l4"/>
            </div>
            <div className="col s12 m12 l12 testimonial-container">
              <img src="images/testimonial-3.JPG" className="col s12 m6 l4"/>
              <div className="col s12 m6 l8">
                <p className="content">
                  Consistent Training... Hardwork... Dedication...
                  Proper Nutrition... Periodize Training with proper guidance...
                  Without branded substances and medicines...
                  Make the results worth it.
                </p>
                <p className="author">SRK (Srikanth)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

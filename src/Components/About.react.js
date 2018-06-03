import React from "react";
import ReactDOM from "react-dom";

class About extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".collapsible").collapsible();
  }

  render() {
    return (
      <div className="ui-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>About Us</h3>
              <div className="margin-tb-10">
                <span className="content">
                  We are one of the most dedicated
                  Physical Training Squad Chennai.
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  We offer the best service to solve your fitness problems,
                  whatever your life style may be after all the complex structure
                  of our body-core is identical for all human beings. Many
                  hundreds of Fitness aspirants are getting benefitted every year
                  through our valuable service.
                </span>
              </div>
              <div className="quote-container">
                <span className="quote">
                  “A BOLD CALL FOR FITNESS TO ALL”
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  You are always welcome to have your fitness consultancy at our
                  &nbsp;<span className="bold-text">“P-3 Fitness Squad”</span>.
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  We offer the best service to solve your fitness problems,
                  whatever your life style may be after all the complex structure
                  of our body-core is identical for all human beings.
                </span>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <h5>Our P-3 Fitness squad organizes,</h5>
              <ul className="collapsible popout">
                <li>
                  <div className="collapsible-header active">
                    <i className="material-icons">person</i>
                    Personal Trainings
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">beenhere</i>
                    Indoor Gym workouts
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">place</i>
                    Outdoor special Cardio sessions
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">directions_run</i>
                    Diabetes fitness training
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">
                    <i className="material-icons">wb_sunny</i>
                    Summer boot camp
                  </div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

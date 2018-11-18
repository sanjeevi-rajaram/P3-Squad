import React from "react";
import ReactDOM from "react-dom";

class About extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div className="ui-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3 className="about-text">About Us</h3>
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
              <h5 className="about-text">Our P-3 Fitness squad organizes,</h5>
              <ul className="collection">
                <li className="collection-item">
                  Fitness Programme Development
                </li>
                <li className="collection-item">
                  Bootcamps
                </li>
                <li className="collection-item">
                  Pilates
                </li>
                <li className="collection-item">
                  HIIT / Tabata
                </li>
                <li className="collection-item">
                  Group Fitness plans
                </li>
                <li className="collection-item">
                  Nutrition plan
                </li>
                <li className="collection-item">
                  Strength Training
                </li>
                <li className="collection-item">
                  Flexibility Training
                </li>
                <li className="collection-item">
                  Team work
                </li>
              </ul>
            </div>
            <div className="col s12 m12 l12">
              <h5 className="about-text">Our specialization includes,</h5>
              <ul className="about-list">
                <li className="list-item">
                  •	Directing and promoting their training activities
                </li>
                <li className="list-item">
                  •	Successfully  conducting their out-door sessions
                </li>
                <li className="list-item">
                  •	Organizing Corporate Fitness Awareness Seminars
                </li>
                <li className="list-item">
                  •	And arranging Beach Boot-Camps for the past seven years
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

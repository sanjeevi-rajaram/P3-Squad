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
                <h5 className="about-text">
                  As a Certified Personal Trainer we are,
                </h5>
                <span className="content">
                  Hired to instruct groups of individuals in exercise activities
                  and the fundamentals of sports. Required to explain the
                  scientifically proven fitness-techniques with ample data and
                  practical demonstration methods of participation.
                  Expected to keenly observe and evaluate the level of the
                  clients’ progress and advice them suitably. Asked to
                  facilitate ‘on-site’ training sessions and
                  ‘Informational Workshops’ providing the clients
                  with valuable in-puts for taking healthy Life-decisions’.
                </span>
              </div>
              <div className="margin-tb-10">
                <h5 className="about-text">
                  As an experienced Fitness Professional, the span of our
                  activities include,
                </h5>
                <ul className="about-list">
                  <li className="list-item">
                    •	Enforce safety regulations governing sports,
                    recreational activities and practical use of
                    various types of Fitness exercise equipments.
                  </li>
                  <li className="list-item">
                    •	Create specially customized programs for specific
                    groups and individuals.
                  </li>
                  <li className="list-item">
                    •	Offer alternative exercises during classes to
                    accommodate different levels of fitness.
                  </li>
                  <li className="list-item">
                    •	Teach proper breathing techniques that must be
                    followed during physical exertion.
                  </li>
                  <li className="list-item">
                    •	Monitor participants’ progress and adapt suitable programs accordingly.
                  </li>
                  <li className="list-item">
                    •	If necessary, obtain opinions of experts in other allied
                    fields like Physiologist, Doctors, Nutrition’s etc before
                    prescribing special programs and diet regimens.
                  </li>
                </ul>
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

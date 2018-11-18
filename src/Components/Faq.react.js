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
              <img src="images/home-progress.jpg" className="col s12 m6 l4"/>
              <div className="col s12 m6 l8">
                <p className="author">
                  As a Certified Personal Trainer i am,
                </p>
                <p className="content">
                  Hired to instruct groups of individuals in exercise activities
                  and the fundamentals of sports. Required to explain the
                  scientifically proven fitness-techniques with ample data and
                  practical demonstration methods of participation. Expected to
                  keenly observe and evaluate the level of the clients’ progress
                  and advice them suitably. Asked to facilitate ‘on-site’
                  training sessions and ‘’Informational Workshops’ providing
                  the clients with valuable in-puts for taking
                  healthy Life-decisions’.
                </p>
              </div>
            </div>
            <div className="col s12 m12 l12 testimonial-container">
              <div className="col s12 m6 l8">
                <p className="author">
                  As an experienced Fitness Professional, the span of his activities include,
                </p>
                <ul className="content">
                  <li>
                    •	Enforce safety regulations governing sports, recreational activities and practical use of various types of Fitness exercise equipments.
                  </li>
                  <li>
                    •	Create specially customized programs for specific groups and individuals.
                  </li>
                  <li>
                    •	Offer alternative exercises during classes to accommodate different levels of fitness.
                  </li>
                  <li>
                    •	Teach proper breathing techniques that must be followed during physical exertion.
                  </li>
                  <li>
                    •	Monitor participants’ progress and adapt suitable programs accordingly.
                  </li>
                  <li>
                    •	If necessary, obtain opinions of experts in other allied fields like Physiologist, Doctors, Nutrition’s etc before prescribing special programs and diet regimens.
                    This becomes very essential a specially while we train certain high-profile clientele.
                  </li>
                </ul>
              </div>
              <img src="images/home-pain.jpg" className="col s12 m6 l4"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

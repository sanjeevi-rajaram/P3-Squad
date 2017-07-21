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
          <h4>Tips to acheive</h4>
          <div className="row">
            <div className="col s12 m12 l12">
              <div className="question col s12 m12 l12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla ornare consectetur est, id placerat est accumsan eget?
              </div>
              <div className="answer col s12 m12 l12">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry
                standard dummy text ever since the 1500, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries.
              </div>
              <div className="question col s12 m12 l12">
                Cras convallis felis eget leo sollicitudin laoreet. Etiam
                tincidunt felis libero, a eleifend purus fermentum vitae?
              </div>
              <div className="answer col s12 m12 l12">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque pulvinar ac lectus sit amet tristique.
              </div>
              <div className="question col s12 m12 l12">
                Phasellus commodo euismod risus, nec maximus mi gravida et?
              </div>
              <div className="answer col s12 m12 l12">
                Morbi bibendum placerat nibh et efficitur. Suspendisse et erat
                ut sapien finibus varius. Pellentesque rhoncus velit nisi, non
                congue neque faucibus quis.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

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
          <h4>Testimonial</h4>
          <div className="row">
            <div className="col s12 m12 l12 testimonial-container">
              <img src="images/home-progress.jpg" className="col s12 m6 l4"/>
              <div className="col s12 m6 l8">
                <p className="content">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p className="author right">
                  - Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="col s12 m12 l12 testimonial-container">
              <div className="col s12 m6 l8">
                <p className="content">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p className="author left">
                  - Lorem Ipsum
                </p>
              </div>
              <img src="images/home-pain.jpg" className="col s12 m6 l4"/>
            </div>
            <div className="col s12 m12 l12 testimonial-container">
              <img src="images/home-passion.jpg" className="col s12 m6 l4"/>
              <div className="col s12 m6 l8">
                <p className="content">
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <p className="author right">
                  - Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;

import React from "react";
import ReactDOM from "react-dom";

class Contact extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div className="ui-contact">
        <div className="container">
          <h4>Contact Us</h4>
          <div className="row">
            <div className="col s12 m6 l6">
              <div className="card horizontal small">
                <div className="card-image">
                  <img src="images/profile.jpg"/>
                </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <h5>Mark</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="card-action">
                    <a>Phone: +9192432489834</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4>Find us at</h4>
          <div className="row">
            <div className="col s12 m6 l4">
              <h5>Eekatuthangal</h5>
              <p>
                No 1, Main road,
                Poomagal street,
                Eekatuthangal. 600032
              </p>
            </div>
            <div className="col s12 m6 l4">
              <h5>Eekatuthangal</h5>
              <p>
                No 1, Main road,
                Poomagal street,
                Eekatuthangal. 600032
              </p>
            </div>
            <div className="col s12 m6 l4">
              <h5>Eekatuthangal</h5>
              <p>
                No 1, Main road,
                Poomagal street,
                Eekatuthangal. 600032
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

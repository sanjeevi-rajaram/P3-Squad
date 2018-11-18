import React from "react";
import ReactDOM from "react-dom";
import {FBPage} from "facebook-plugins";

class Footer extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <footer className="ui-footer page-footer">
        <div className="container">
          <div className="row">
            <div className="col s12 m8 l8">
              <h5 className="white-text">P3-Squad</h5>
              <div className="col s6 m6 l6">
                <p className="white-text">
                  Excalibur Gym, Sundar nagar, Guindy.
                </p>
                <p className="white-text">
                  Cell : 7358181100 / 9176668620
                </p>
                <p className="white-text">
                  Email :  Sanjeevi.rajaram @ gmail.com
                </p>
              </div>
              <div className="col s6 m6 l6">
              </div>
            </div>
            <div className="col s12 m4 l4">
              <h5 className="white-text">Links</h5>
              <div>
                <FBPage appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/"
                  height={150}
                  hideCover={false}
                  showFacepile={false}
                  tabs={[""]}/>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © 2018 Copyright P3-Squad
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

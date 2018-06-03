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
            <div className="col l6 s12">
              <h5>Excaliburs-P3</h5>
              <p>
                Indoor GYM regiment of work-outs directed
              </p>
              <p>
                Outdoor special cardio sessions
              </p>
              <p>
                Corporate Fitness Programmes
              </p>
              <p>
                Diabetes fitness training
              </p>
              <p>
                Summer boot camp
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>Links</h5>
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

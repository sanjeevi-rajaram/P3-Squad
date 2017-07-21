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
              <h5>Footer Content</h5>
              <p>
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5>Links</h5>
              <div>
                <FBPage appId="1991303037566099"
                  href="https://www.facebook.com/facebook"
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
            © 2014 Copyright Text
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

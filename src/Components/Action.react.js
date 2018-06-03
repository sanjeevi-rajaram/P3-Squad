import React from "react";

class Action extends React.Component {
  render() {
    return (
      <div className="ui-action fixed-action-btn horizontal click-to-toggle">
        <a className="btn-floating btn-large black">
          <i className="large material-icons">notifications</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating google-plus"
              href="https://plus.google.com/u/0/108244396716269956532">
              <img src="images/google-plus-logo.png"/>
            </a>
          </li>
          <li>
            <a className="btn-floating facebook"
              href="https://www.facebook.com/PainPassionProgress/">
              <img src="images/facebook-logo.png"/>
            </a>
          </li>
          <li>
            <a className="btn-floating instagram"
              href="https://www.instagram.com/pain_passion_progress_p3_/">
              <img src="images/instagram-logo.jpg"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Action;

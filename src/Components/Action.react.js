import React from "react";

class Action extends React.Component {
  render() {
    return (
      <div className="ui-action fixed-action-btn horizontal click-to-toggle">
        <a className="btn-floating btn-large black">
          <i className="large material-icons">format_quote</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating google-plus">
              <img src="images/google-plus-logo.png"/>
            </a>
          </li>
          <li>
            <a className="btn-floating twitter">
              <img src="images/twitter-logo.png"/>
            </a>
          </li>
          <li>
            <a className="btn-floating facebook">
              <img src="images/facebook-logo.png"/>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Action;

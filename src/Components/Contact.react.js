import React from "react";
import ReactDOM from "react-dom";
import {FBEmbedPost, FBEmbedVideo} from "facebook-plugins";
import InstagramEmbed from "react-instagram-embed";

class Contact extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div className="ui-contact">
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l4">
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedPost appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/posts/2042252116102041"
                  width={350}>
                </FBEmbedPost>
              </div>
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedVideo appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/videos/1813073999019855"
                  width={350}>
                </FBEmbedVideo>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedVideo appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/videos/2044603772533542"
                  width={350}>
                </FBEmbedVideo>
              </div>
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedPost appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/posts/1821603101500278"
                  width={350}>
                </FBEmbedPost>
              </div>
            </div>
            <div className="col s12 m4 l4">
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedPost appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/posts/2017639208563332"
                  width={350}>
                </FBEmbedPost>
              </div>
              <div className="col s12 m12 l12 margin-b-10">
                <FBEmbedPost appId="383211488859037"
                  href="https://www.facebook.com/PainPassionProgress/posts/1789797978014124"
                  width={350}>
                </FBEmbedPost>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

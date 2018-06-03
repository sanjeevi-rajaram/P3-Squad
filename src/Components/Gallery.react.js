import React from "react";
import ReactDOM from "react-dom";

class Gallery extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".slider").slider();
    this.el.find("#album-modal").modal({
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    });
    new Viewer(document.getElementById("album"), {
      inline: false
    });
  }

  openAlbum = (albumIndex) => {
    this.el.find("#album-modal").modal("open");
  }

  closeAlbum = (albumIndex) => {
    this.el.find("#album-modal").modal("close");
  }

  render() {
    return (
      <div className="ui-gallery">
        <div className="slider">
          <ul className="slides">
            <li>
              <img src="images/gallery-1.jpg"/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-2.jpg"/>
              <div className="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-3.jpg"/>
              <div className="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="images/gallery-4.jpg"/>
              <div className="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 className="light grey-text text-lighten-3">Heres our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>Events</h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                doloraugue, sollicitudin eu risus eget, luctus gravida ante.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Aenean lectus lectus, sodales
                lacinia luctus et, egestas egestas lacus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nam pharetra pharetra nisl,
                cursus consectetur arcu viverra non. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Donec cursus sodales dui at venenatis. Quisque bibendum
                tortor nec mi venenatis, id congue ipsum auctor. Nunc sed leo a
                enim aliquam consectetur. Curabitur a velit malesuada, sodales
                est non, porttitor ipsum.
              </span>
            </div>
            <div className="col s12 m12 l12">
              <h5>Personal Training</h5>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-weight-loss.jpg" alt="Picture"/>
                    <span className="card-title">Weight Loss</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Duration : 12 weeks</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-weight-gain.JPG" alt="Picture"/>
                    <span className="card-title">Weight Gain</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Duration : 8 to 12 weeks</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-fat-loss.JPG" alt="Picture"/>
                    <span className="card-title">Fat Loss</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Duration : 8 to 12 weeks</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-transform.JPG" alt="Picture"/>
                    <span className="card-title">Transform</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Duration : 8 to 12 weeks</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-strength-training.jpg" alt="Picture"/>
                    <span className="card-title">Strength Training</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Duration : 8 to 12 weeks</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <h5>Pilates Training</h5>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/side-navigation.jpg" alt="Picture"/>
                    <span className="card-title">Boot Camp</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Tuesday/Thursday/Saturday&Sunday</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/side-navigation.jpg" alt="Picture"/>
                    <span className="card-title">Beach Cardio</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>Sunday</p>
                  </div>
                </div>
              </div>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/side-navigation.jpg" alt="Picture"/>
                    <span className="card-title">Special Cardio Training</span>
                    <a onClick={() => this.openAlbum("1")}
                      className="btn-floating halfway-fab waves-effect red">
                      <i className="material-icons">launch</i>
                    </a>
                  </div>
                  <div className="card-content">
                    <p>HIIT(Tabatta) - 12 weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="album-modal" className="modal gallery-album bottom-sheet">
          <div className="modal-content">
            <div className="row">
              <h4 className="col s11 m11 l11">Album</h4>
              <i className="col s1 m1 l1 material-icons pointer"
                onClick={() => this.closeAlbum("1")}>
                clear
              </i>
            </div>
            <ul id="album" className="row">
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 1"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 2"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 3"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 1"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 2"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 3"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 1"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 2"/>
              </li>
              <li className="col s4 m3 l2">
                <img className="album-image" src="images/side-navigation.jpg" alt="Picture 3"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;

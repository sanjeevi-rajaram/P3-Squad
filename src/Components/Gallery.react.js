import React from "react";
import ReactDOM from "react-dom";

class Gallery extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".slider").slider();
    this.el.find(".tabs").tabs();
    this.el.find("#album-modal").modal({
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    });
    new Viewer(document.getElementById("bootcamp"), {
      inline: false
    });
    new Viewer(document.getElementById("beachcardio"), {
      inline: false
    });
  }

  openAlbum = (albumIndex) => {
    this.el.find("#album-modal").modal("open");
    this.el.find(".tabs").tabs("select_tab", "bootcamp");
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
                <h3>P3-Squad</h3>
              </div>
            </li>
            <li>
              <img src="images/gallery-2.jpg"/>
              <div className="caption left-align">
                <h3>Pain</h3>
              </div>
            </li>
            <li>
              <img src="images/gallery-3.jpg"/>
              <div className="caption right-align">
                <h3>Passion</h3>
              </div>
            </li>
            <li>
              <img src="images/gallery-4.jpg"/>
              <div className="caption center-align">
                <h3>Progress</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>Events</h3>
              <span className="content">
                If your busy schedule doesn&quot;t allow you to exercise for
                a 30-minute period during the day, you have the option to
                break it up into bouts of 10 minutes or more. Research has
                shown that the health benefits are similar when you do this!
              </span>
            </div>
            <div className="col s12 m12 l12">
              <h5>Personal Training</h5>
              <span className="col s12 m12 l12 content margin-b-10">
                Two types of physical activity are most important for
                managing diabetes: aerobic exercise and strength training.
              </span>
              <span className="col s12 m12 l12 content">
                <span className="bold-text">Aerobic exercise</span>&nbsp;
                helps your body use insulin better.
                It makes your heart and bones strong, relieves stress,
                improves blood circulation, and reduces your risk for heart
                disease by lowering blood glucose and blood pressureand
                improving cholesterol levels.
              </span>
              <span className="col s12 m12 l12 content">
                <span className="bold-text">Strength training</span>&nbsp;
                (also called resistance training) makes
                your body more sensitive to insulin and can lower blood
                glucose. It helps to maintain and build strong muscles and
                bones, reducing your risk for osteoporosis and bone fractures.
              </span>
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
              <span className="col s12 m12 l12 content">
                  Exercising outdoors provides an opportunity to be physically
                  active in a constantly changing environment. The more
                  challenging the terrain, the harder the body has to work
                  to sustain an efficient work rate. Cardio machines in the
                  gym can provide numerous benefits, but doing the same
                  movement pattern over and over again could potentially
                  cause an overuse injury. Walking, hiking or running on
                  terrain that is constantly changing teaches the body
                  how to adapt to a changing environment.
              </span>
              <div className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image">
                    <img className="image" src="images/gallery-bootcamp.jpg" alt="Picture"/>
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
                    <img className="image" src="images/gallery-beach-cardio.jpg" alt="Picture"/>
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
                    <img className="image" src="images/gallery-special-cardio.jpg" alt="Picture"/>
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
              <div className="col s11 m11 l11">
                <ul className="tabs album-tabs">
                  <li className="tab col s3">
                    <a className="active" href="#bootcamp">Boot Camp</a>
                  </li>
                  <li className="tab col s3">
                    <a href="#beachcardio">Beach Cardio</a>
                  </li>
                </ul>
              </div>
              <i className="col s1 m1 l1 material-icons pointer"
                onClick={() => this.closeAlbum("1")}>
                clear
              </i>
            </div>
            <ul id="bootcamp" className="row">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((number) => {
                  return (
                    <li key={number} className="col s4 m3 l2">
                      <img className="album-image"
                        src={"images/album-bootcamp-" + number +".jpg"}/>
                    </li>
                  )
                })
              }
            </ul>
            <ul id="beachcardio" className="row">
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((number) => {
                  return (
                    <li key={number} className="col s4 m3 l2">
                      <img className="album-image"
                        src={"images/album-beachcardio-" + number +".jpg"}/>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;

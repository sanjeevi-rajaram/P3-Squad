import React from "react";
import ReactDOM from "react-dom";

class Home extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".parallax").parallax();
  }

  render () {
    return (
      <div className="ui-home">
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-1.jpg"/>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">P3-Squad</h2>
            <div className="row">
              <div className="col s12 m4 l3">
                <img className="parallax-content-image" src="images/profile.jpg"/>
              </div>
              <div className="col s12 m8 l9">
                <p className="grey-text home-content text-darken-3">
                  Sanjeevi Rajaram is the creator of P3 Fitness Squad, whose
                  magic mantra in Life - Pain, Passion and Progress is put to a
                  Productive Practice in this venture. Well Sanjeevi Rajaram is
                  the proud holder of the Prestigious award presented by –
                  ISSA (USA ) :- International Sports Sciences Association,
                  For&nbsp;
                  <span className="bold-text">
                    “Professional  Fitness Trainer“
                  </span>
                  , a certificate of Merit, for the Successful completion of the
                  course of Physical Fitness Training Conducted by them.
                  With amazing persistence
                  during the past 10 years, he struggled and worked any planned.
                  To keep with the modern developments in the field, he is also
                  regularly updating his physical Training expertise, through
                  specialized programme of&nbsp;
                  <span className="bold-text">
                    “Pilates Training“
                  </span>
                  &nbsp;from GAYO FITNESS
                  ACADEMY, Mumbai in order to train its members with the latest
                  advances in the Art and Science of Physical fitness.
                </p>
              </div>
            </div>
          </div>
          <div className="row container">
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-pain.jpg"/>
                  <div className="card-title">
                    PAIN
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-passion.jpg"/>
                  <div className="card-title">
                    PASSION
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card">
                <div className="card-image">
                  <img src="images/home-progress.jpg"/>
                  <div className="card-title">
                    PROGRESS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax-container">
          <div className="parallax">
            <img src="images/home-parallax-2.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

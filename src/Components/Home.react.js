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
            <div className="parallax-content">
              <div className="row">
                <div className="col right s12 m8 l5">
                  <span className="col s12 m12 l12 quotes-title">P3</span>
                  <span className="col s12 m12 l12 quotes">PAIN.PASSION.PROGRESS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section white">
          <div className="row container">
            <h2 className="header">Bootcamp</h2>
            <div className="row">
              <div className="col s12 m4 l3">
                <img className="parallax-content-image" src="images/profile.jpg"/>
              </div>
              <div className="col s12 m8 l9">
                <p className="grey-text text-darken-3 lighten-">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  laoreet, elit in hendrerit volutpat, elit lectus tincidunt
                  neque, a commodo sem ligula vel ipsum. Nullam in sagittis
                  libero. Suspendisse cursus quam sit amet ipsum laoreet
                  gravida. Donec lobortis diam eu porttitor ullamcorper. Morbi
                  aliquam, justo non volutpat vulputate, metus nulla laoreet
                  diam, vitae condimentum risus purus vel est. Mauris aliquet
                  pellentesque enim ut feugiat. Aliquam dignissim arcu sed mi
                  tincidunt lobortis. Vestibulum vehicula sapien id eros
                  aliquam, sit amet aliquet massa scelerisque. Suspendisse vitae
                  tellus tortor. Mauris convallis dictum elit. Duis et turpis at
                  lectus congue tempus sit amet ac velit. Pellentesque nec erat
                  fermentum, malesuada magna ac, dignissim eros.
                </p>
              </div>
            </div>
            <p className="grey-text text-darken-3 lighten-3">
              Nulla facilisi. Proin semper pellentesque dolor et lobortis.
              Sed eu orci sed lorem tempus tincidunt. Aenean aliquet risus sit
              amet purus tristique consequat. Nam eget nisl nec tellus venenatis
              pellentesque eu pulvinar tortor. Nunc leo nisl, varius et volutpat
              eget, gravida id ex. Curabitur ex lectus, sollicitudin eu rhoncus
              nec, mollis nec massa. Quisque finibus rutrum odio, nec bibendum
              lectus interdum ac. Curabitur at molestie nisi. Sed ut ullamcorper
              odio. Maecenas tempus, neque ut laoreet ullamcorper, ante leo
              maximus lorem, vitae ultricies neque lectus ac libero.
            </p>
          </div>
          <div className="row container">
            <div className="col s12 m12 l4">
              <div className="card medium">
                <div className="card-image">
                  <img src="images/home-pain.jpg"/>
                  <div className="card-title">
                    PAIN
                  </div>
                </div>
                <div className="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card medium">
                <div className="card-image">
                  <img src="images/home-passion.jpg"/>
                  <div className="card-title">
                    PASSION
                  </div>
                </div>
                <div className="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
            <div className="col s12 m12 l4">
              <div className="card medium">
                <div className="card-image">
                  <img src="images/home-progress.jpg"/>
                  <div className="card-title">
                    PROGRESS
                  </div>
                </div>
                <div className="card-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
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

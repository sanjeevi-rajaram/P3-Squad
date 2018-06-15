import React from "react";
import ReactDOM from "react-dom";

class About extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
  }

  render() {
    return (
      <div className="ui-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>About Us</h3>
              <div className="margin-tb-10">
                <span className="content">
                  We are one of the most dedicated
                  Physical Training Squad Chennai.
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  We offer the best service to solve your fitness problems,
                  whatever your life style may be after all the complex structure
                  of our body-core is identical for all human beings. Many
                  hundreds of Fitness aspirants are getting benefitted every year
                  through our valuable service.
                </span>
              </div>
              <div className="quote-container">
                <span className="quote">
                  “A BOLD CALL FOR FITNESS TO ALL”
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  You are always welcome to have your fitness consultancy at our
                  &nbsp;<span className="bold-text">“P-3 Fitness Squad”</span>.
                </span>
              </div>
              <div className="margin-tb-10">
                <span className="content">
                  We offer the best service to solve your fitness problems,
                  whatever your life style may be after all the complex structure
                  of our body-core is identical for all human beings.
                </span>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <h5>Our P-3 Fitness squad organizes,</h5>
              <ul className="collection">
                <li className="collection-item">
                  <div>
                    <div className="secondary-content">
                      <i className="material-icons">person</i>
                    </div>
                    Personal Trainings
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    <div className="secondary-content">
                      <i className="material-icons">beenhere</i>
                    </div>
                    Indoor Gym workouts
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    <div className="secondary-content">
                      <i className="material-icons">place</i>
                    </div>
                    Outdoor special Cardio sessions
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    <div className="secondary-content">
                      <i className="material-icons">directions_run</i>
                    </div>
                    Diabetes fitness training
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    <div className="secondary-content">
                      <i className="material-icons">wb_sunny</i>
                    </div>
                    Summer boot camp
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s12 m12 l12">
              <h5>Why do you need a personal trainer?</h5>
              <div className="margin-b-10 margin-t-20">
                <span className="content">
                  A <span className="bold-text">Personal trainer</span>&nbsp;
                  is the fitness professional and the
                  motivation you need. Your personal trainer is extremely
                  important to your fitness success. Once the goals are set,
                  a personal trainer will teach proper exercise methods and
                  progressions. Each piece of information taught has one
                  purpose:&nbsp;
                  <span className="bold-text">to reach your fitness goals</span>
                  .
                </span>
              </div>
            </div>
            <div className="col s12 m12 l12">
              <h5>Advantages of Commercial Gym</h5>
              <div className="col s12 m12 l12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src="images/about-1.jpg"/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        Commercial gyms will be filled with every imaginable
                        option in training equipment; from barbells, dumbbells
                        and kettlebells to advanced variable
                        resistance training machines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l12">
                <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        A commercial gym can be a great combination of
                        self-improvement and social club, making exercise
                        a way to make new friends and network
                      </p>
                    </div>
                  </div>
                  <div className="card-image">
                    <img src="images/about-2.png"/>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l12">
                <div className="card horizontal">
                  <div className="card-image">
                    <img src="images/about-3.png"/>
                  </div>
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        If you want to try a new training protocol,
                        the equipment you need will be there
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col s12 m12 l12">
                <div className="card horizontal">
                  <div className="card-stacked">
                    <div className="card-content">
                      <p>
                        If you get bored with your routine, changing things up
                        is as easy as walking across the gym floor
                      </p>
                    </div>
                  </div>
                  <div className="card-image">
                    <img src="images/about-4.png"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

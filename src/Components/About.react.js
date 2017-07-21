import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="ui-about">
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12">
              <h3>About</h3>
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
              <ul className="timeline">
                <li>
                  <span className="timeline-label">Pain</span>
                  <i className="timeline-icon z-depth-2 material-icons">
                    format_quote
                  </i>
                  <div className="timeline-content">
                    <h4 className="title">How we acheive?</h4>
                    <p className="light-text">
                      Sed ut perspiciatis unde omnis iste natus error
                      sitvoluptatem accusantium doloremque laudantium, totam rem
                      aperiam,eaque ipsaquae ab illo inventore veritatis etquasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="timeline-label">Passion</span>
                  <i className="timeline-icon z-depth-2 material-icons">
                    format_quote
                  </i>
                  <div className="timeline-content">
                    <h4 className="title">What we reach?</h4>
                    <p className="light-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="timeline-label">Progress</span>
                  <i className="timeline-icon z-depth-2 material-icons">
                    format_quote
                  </i>
                  <div className="timeline-content">
                    <h4 className="title">Where we move?</h4>
                    <p className="light-text">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit amet, consectetur, adipisci velit, sed quia nonnumquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

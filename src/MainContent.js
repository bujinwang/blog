import React, {PureComponent} from 'react';
import PostPreview from "./PostPreview";

class MainContent extends PureComponent {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <PostPreview title="Man must explore, and this is exploration at its greatest"
                         subTitle="Problems look mighty small from 150 miles up"
                         postTime="on September 24, 2018"/>
            <hr/>
            <PostPreview title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                         postTime="on September 18, 2018"/>
            <hr/>
            <PostPreview title="Science has not yet mastered prophecy"
                         subTitle="We predict too much for the next year and yet far too little for the next ten."
                         postTime="on August 24, 2018"/>
            <hr/>
            <PostPreview title="Failure is not an option"
                         subTitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
                         postTime="on July 8, 2018"/>
            <hr/>
            <div className="clearfix">
              <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;

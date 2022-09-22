import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                <p class="footer__title">
                  <span id="footer-saying">That's (not) all folks!</span>
                </p>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h5>You can see more awesome projects on GitHub. Send me a message if you want to chat.</h5>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
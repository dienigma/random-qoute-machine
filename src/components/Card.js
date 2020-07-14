import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col">
              {this.props.selected && (
                <>
                  <h3 id="text">
                    <span style={{ paddingRight: "1.5rem" }}>
                      <i className="fa fa-quote-left"></i>
                    </span>
                    {this.props.selected.quote}
                  </h3>
                  <h4 className="text-right" id="author">
                    {this.props.selected.author}
                  </h4>
                </>
              )}
            </div>
          </div>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col-md-6">
              <a
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                className="btn btn-secondary"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div className="col-md-6">
              <button
                onClick={this.props.setRandomQuote}
                className="btn btn-primary"
                style={{ float: "right" }}
                id="new-quote"
              >
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

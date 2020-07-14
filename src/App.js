import React from "react";

export default class App extends React.Component {
  state = {
    quotes: [],
    selected: null,
  };
  async componentDidMount() {
    const response = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const jsonResponse = await response.json();
    console.log(jsonResponse.quotes);

    this.setState(() => ({
      quotes: jsonResponse.quotes,
      selected: jsonResponse.quotes[0],
    }));
  }

  setRandomQuote = () => {
    const random_index = Math.floor(Math.random() * this.state.quotes.length);
    this.setState(() => ({ selected: this.state.quotes[random_index] }));
  };

  render() {
    const colors = [
      "bg-primary",
      "bg-secondary",
      "bg-success",
      "bg-danger",
      "bg-warning",
      "bg-info",
      "bg-dark",
    ];
    const randomBackgound = colors[Math.floor(Math.random() * colors.length)];
    return (
      <div className={`${randomBackgound}`} style={{ height: "100vh" }}>
        <div id="quote-box" className={`container-fluid`}>
          <div className="row tex-center">
            <div className="col-md-4 offset-md-4 align-middle">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      {this.state.selected && (
                        <>
                          <h3 id="text">
                            <span style={{ paddingRight: "1.5rem" }}>
                              <i className="fa fa-quote-left"></i>
                            </span>
                            {this.state.selected.quote}
                          </h3>
                          <h4 className="text-right" id="author">
                            {this.state.selected.author}
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
                        onClick={this.setRandomQuote}
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

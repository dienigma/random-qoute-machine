import React from "react";
import Card from "./components/Card";

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
              <Card
                selected={this.state.selected}
                setRandomQuote={this.setRandomQuote}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

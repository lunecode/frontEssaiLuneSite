import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bulma/bulma';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
            "Go to the store",
            "Wash the dishes",
            "Learn some code"
            ],
    render() {
      return (
        <div className="content">
          <div className="container">
            <section className="section">
              <ul>
                {this.state.list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
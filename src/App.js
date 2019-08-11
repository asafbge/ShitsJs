import './App.css';

import React, { Component } from 'react'
import { Home } from './components/home/home.component'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => 
        response.json()
        )
      .then(state => 
        this.setState(state)
        );
  }

  render() {
    var logo = '';
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

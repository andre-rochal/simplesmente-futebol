import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Component } from 'react';
import res from 'express/lib/response';

class App extends Component {
  constructor(props){
    super(props)

    axios
      .get('/postagens')
      .then(result => {
        console.log(result)
      })

    axios
      .get('/comentarios')
      .then(result => {
        console.log(res)
      })
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}

export default App;

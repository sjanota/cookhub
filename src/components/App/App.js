import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from '../Content'

const App = () => {
  return (<div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      Play around with basics
    </p>
    <Content isReady={false}/>
  </div>);
}

export default App;

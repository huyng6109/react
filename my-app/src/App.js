import './App.css';
import Header from './components/Header';
import React,{ Component } from 'react';
import Home from './components/Home';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Home />
      </div>
    );
  }
}
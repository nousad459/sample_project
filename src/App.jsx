import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Login from './components/Login';
import Table from './components/Table';
import ReactTable from './components/ReactTable';
import Navbar from './components/CustomNavbar';
import MultiSelect from './components/Multiselect'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/table" component={Table} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          <Route path="/reacttable" component={ReactTable} />
          <Route path="/multiselect" component={MultiSelect} />
        </div>
      </Router>
    );
  }
}

export default App;

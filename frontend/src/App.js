import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { About } from './components/About';
import { Users } from './components/Users';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="container  p-4"></div>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

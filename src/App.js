import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="site">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="*" exact={true} component={NotFound} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

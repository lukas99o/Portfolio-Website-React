import React from 'react';
import { useState, UseEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from "./components/menu";
import Me from './components/Me';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import './styles/App.css'
import UseKeySequenceDetector from './hooks/KeySequenceDetector';

function App() {
  const [message, setMessage] = useState('');
  const [animate, setAnimate] = useState(false);
  const keySequence = UseKeySequenceDetector('1337', () => {
    setMessage('Epic Sequence Detected!');
    setAnimate(true);
    setTimeout(() => setAnimate(false), 2000);
  });

  return (
    <Router>
      <div>

        <Menu />
        <Switch>
          <Route path="/Me" exact>
            <Me />
          </Route>
          <Route path="/Cv" exact>
            <Cv />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Certifications">
            <Certifications />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

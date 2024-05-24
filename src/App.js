import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Menu from "./components/menu";
import Me from './components/Me';
import Cv from './components/Cv';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Welcome from "./components/Welcome";
import './styles/App.css'
import useKeySequenceDetector from './hooks/KeySequenceDetector';

function App() {
  const [message, setMessage] = useState('');
  const [animate, setAnimate] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const keySequence = useKeySequenceDetector('1337', () => {
    setMessage('Epic Sequence Detected!');
    setAnimate(true);
    setShowMessage(true);
    setTimeout(() => setAnimate(false), 2000);
    setTimeout(() => {
      setMessage('');
      setShowMessage(false);
    }, 3500);
  });

  return (
    <Router>
      <div>                                                                        

        <Menu />
        <Switch>
          <Route path="/Welcome">
              <Welcome />
          </Route>
          <Route path="/Me" exact>
            <Me />
          </Route>
          <Route path="/Cv" exact>
            <Cv />
          </Route>
          <Route path="/Portfolio" exact>
            <Portfolio />
          </Route>
          <Route path="/Certifications" exact>
            <Certifications />
          </Route>
          <Route path="/Contact" exact>
            <Contact />
          </Route>
          <Redirect from="/" to="/Welcome" exact />
        </Switch>
        {showMessage && (
          <div className="message-container">
            <div className={animate ? 'epicEffect' : ''}>
              {message}
            </div>
          </div> 
        )}
      </div>
    </Router>
  );
}

export default App;

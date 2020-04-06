import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// CHILD COMPONENTS
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
// STYLES
import './App.css';

function App() {
  return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>

      </Router>

  );
}

export default App;

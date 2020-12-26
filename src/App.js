import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Support from './pages/Support';
import Services from './pages/Services';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={About} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/chat' component={Chat} />
          <Route path='/support' component={Support} />
          <Route path='/services' component={Services} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;

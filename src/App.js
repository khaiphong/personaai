import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Support from './pages/Support';
import Services from './pages/Services';
import Directories from './pages/services/Directories';
import AllowNotifications from './pages/services/AllowNotifications';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/chat' exact component={Chat} />
        <Route path='/support' exact component={Support} />
        <Route path='/services' exact component={Services} />
        <Route path='/services/directories' exact component={Directories} />
        <Route path='/services/allowNotifications' exact component={AllowNotifications} />
      </Switch>
    </Router>
  );
}

export default App;

import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// root component
// Router component wrapped around application, so it can be used throughout the application
// Switch component makes sure that only one route shows at any one time. All routes gob in this component
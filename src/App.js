import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  return (
    <Router> 
      <div className="App">
        <Navbar /> 
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
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
// Switch component makes sure that only one route shows at any one time. All routes go in this component
// When a request is made to a url, the browser will look through the Switch component from top to bottom and find 
// the match. it stops at the first match and renders the component inside the route
// if we didnt use Switch, around the Route componenent, we could have multiple pages showing at once
// exact property makes sure that the route is matching the entire route instead of one part of it
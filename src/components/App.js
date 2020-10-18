import React from 'react';
import VisitorList from './VisitorList';
import VisitorLog from './VisitorLog';
import LatestNews from './LatestNews';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename='/'>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/visitorlog'} className="nav-link"> Visitor Log </Link></li>
            <li><Link to={'/visitorlist'} className="nav-link">Visitor List</Link></li>
            <li><Link to={'/latestnews'} className="nav-link">Latest News</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/visitorlog" />)} />  
            <Route path='/visitorlog' component={VisitorLog} />
            <Route path='/visitorlist' component={VisitorList} />
            <Route path='/latestnews' component={LatestNews} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
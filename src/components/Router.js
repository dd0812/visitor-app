import React from 'react';
import VisitorList from './VisitorList';
import VisitorLog from './VisitorLog';
import LatestNews from './LatestNews';
import { Router, Route, browserHistory, Switch } from 'react-router-dom';

//path = "/" component = {App}
{/* <IndexRoute component = {Home} /> */}

const AppRouter = () => (
    <Switch>
        <Route exact path = "/visitorlog" component = {VisitorLog} />
        <Route path = "visitorlist" component = {VisitorList} />
        <Route path = "latestnews" component = {LatestNews} />
    </Switch>
);

//     <Router history = {browserHistory}>
//     <Route>
//        <Route path = "visitorlog" component = {VisitorLog} />
//        <Route path = "visitorlisit" component = {VisitorList} />
//        <Route path = "latestnews" component = {LatestNews} />
//     </Route>
//  </Router>

export default AppRouter;
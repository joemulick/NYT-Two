// Inclue the React library
// var React = require("react");
import React from "react";
import PropTypes from 'prop-types';

// Include the react-router module
// var router = require("react-router");
import router from "react-router";

// Include the Route component for displaying individual routes
// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Route = router.Route;
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
// var Main = require("../components/main");
import Main from "../components/main";

// FORM IMPORT IF NEC
// var Form = require("../components/form");


// Export the Routes
export default (

  // The high level component is the Router component
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* 


      If user selects Child1 then show the appropriate component
      <Route path="Child1" component={Child1} >

        {/* Child1 has its own Grandchildren options 
        <Route path="GrandChild1" component={GrandChild1} />
        <Route path="GrandChild2" component={GrandChild2} />

        <IndexRoute component={GrandChild1} />

      </Route>

      {/* If user selects Child2 then show the appropriate component
      <Route path="Child2" component={Child2} />

      {/* If user selects any other path... we get the Home Route 
      <IndexRoute component={Child1} />
                                                              */}
    </Route>
  </Router>
);

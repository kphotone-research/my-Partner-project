import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import pages for routing
import HomePage from './HomePage';  // HomePage component
import SupplierPage from './SupplierPage';  // SupplierPage component

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/suppliers" component={SupplierPage} />
      </Switch>
    </Router>
  );
}

export default App;

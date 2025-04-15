import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import SupplierPage from './SupplierPage';
import AddProject from './AddProject'; // ✅ Added

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/suppliers" component={SupplierPage} />
        <Route path="/add-project" component={AddProject} /> {/* ✅ Added */}
      </Switch>
    </Router>
  );
}

export default App;

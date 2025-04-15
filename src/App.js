// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';  // Ensure HomePage component is correctly imported
import AddProject from './AddProject';  // Ensure AddProject component is correctly imported
import ViewProjects from './ViewProjects';  // Ensure ViewProjects component is correctly imported
import SupplierPage from './SupplierPage';  // Ensure SupplierPage component is correctly imported

function App() {
  return (
    <Router>
      <Switch>
        {/* Home Page route */}
        <Route exact path="/" component={HomePage} />
        
        {/* Add Project route */}
        <Route path="/add-project" component={AddProject} />
        
        {/* View Projects route */}
        <Route path="/projects" component={ViewProjects} />
        
        {/* Supplier Page route */}
        <Route path="/suppliers" component={SupplierPage} />
      </Switch>
    </Router>
  );
}

export default App;

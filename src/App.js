import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';  // Ensure this is correctly imported
import AddProject from './AddProject';  // Ensure AddProject is imported
import ViewProjects from './ViewProjects';  // Ensure ViewProjects is imported
import SupplierPage from './SupplierPage';  // Ensure SupplierPage is imported

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/add-project" component={AddProject} />
        <Route path="/projects" component={ViewProjects} />  {/* Route for viewing all projects */}
        <Route path="/suppliers" component={SupplierPage} />
      </Switch>
    </Router>
  );
}

export default App;

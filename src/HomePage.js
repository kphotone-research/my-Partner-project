import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Kphotone Partner Redirect System</h1>
      <p>This project handles survey redirects and supplier routing.</p>
      
      {/* Link to add a new project */}
      <Link to="/add-project">
        <button>Add New Project</button>
      </Link>
      
      {/* Link to view all projects */}
      <Link to="/projects">
        <button>View All Projects</button>
      </Link>
    </div>
  );
}

export default HomePage;

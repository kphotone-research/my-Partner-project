// src/ViewProjects.js
import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; // Ensure you have your Supabase setup

function ViewProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch projects from Supabase
    async function fetchProjects() {
      const { data, error } = await supabase.from('projects').select('*');
      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div>
      <h2>All Projects</h2>
      {projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px' }}>
            <h3>{project.project_name}</h3>
            <p><strong>Survey ID:</strong> {project.survey_id}</p>
            <p><strong>Country:</strong> {project.country}</p>
            <pre>{JSON.stringify(project.suppliers, null, 2)}</pre>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewProjects;

import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Ensure you have your Supabase setup

function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [surveyId, setSurveyId] = useState('');
  const [country, setCountry] = useState('');
  const [suppliers, setSuppliers] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('projects')
      .insert([{ project_name: projectName, survey_id: surveyId, country, suppliers }]);

    if (error) {
      console.error('Error inserting project:', error);
    } else {
      alert('Project added successfully!');
    }
  };

  return (
    <div>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit}>
        <label>Project Name:</label>
        <input type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} required />
        
        <label>Survey ID:</label>
        <input type="text" value={surveyId} onChange={(e) => setSurveyId(e.target.value)} required />
        
        <label>Country:</label>
        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required />
        
        <label>Suppliers (JSON format):</label>
        <textarea value={suppliers} onChange={(e) => setSuppliers(e.target.value)} required />
        
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;

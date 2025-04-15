import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function AddProject() {
  const [projectName, setProjectName] = useState('');
  const [surveyId, setSurveyId] = useState('');
  const [country, setCountry] = useState('');
  const [suppliers, setSuppliers] = useState([
    { name: '', qualified: '', terminate: '', quota_full: '' }
  ]);

  const handleAddSupplier = () => {
    setSuppliers([...suppliers, { name: '', qualified: '', terminate: '', quota_full: '' }]);
  };

  const handleChangeSupplier = (index, field, value) => {
    const updated = [...suppliers];
    updated[index][field] = value;
    setSuppliers(updated);
  };

  const handleSubmit = async () => {
    const { error } = await supabase.from('projects').insert([{
      project_name: projectName,
      survey_id: surveyId,
      country,
      suppliers,
    }]);

    if (error) alert('❌ Error: ' + error.message);
    else alert('✅ Project saved!');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Add Survey Project</h2>
      <input placeholder="Project Name" value={projectName} onChange={e => setProjectName(e.target.value)} /><br />
      <input placeholder="Survey ID" value={surveyId} onChange={e => setSurveyId(e.target.value)} /><br />
      <input placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} /><br />
      <h3>Suppliers</h3>
      {suppliers.map((supplier, i) => (
        <div key={i}>
          <input placeholder="Name" value={supplier.name} onChange={e => handleChangeSupplier(i, 'name', e.target.value)} />
          <input placeholder="Qualified" value={supplier.qualified} onChange={e => handleChangeSupplier(i, 'qualified', e.target.value)} />
          <input placeholder="Terminate" value={supplier.terminate} onChange={e => handleChangeSupplier(i, 'terminate', e.target.value)} />
          <input placeholder="Quota Full" value={supplier.quota_full} onChange={e => handleChangeSupplier(i, 'quota_full', e.target.value)} />
          <br />
        </div>
      ))}
      <button onClick={handleAddSupplier}>+ Add Supplier</button><br /><br />
      <button onClick={handleSubmit}>Save Project</button>
    </div>
  );
}

export default AddProject;

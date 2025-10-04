import React, { useState } from 'react';
import '../styles/App.css';

const ProjectSubmit = () => {
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) return alert('Please upload a project file!');
    alert(`Project ${file.name} submitted successfully!`);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Submit Your Project</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="file" onChange={handleChange} required />
        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default ProjectSubmit;
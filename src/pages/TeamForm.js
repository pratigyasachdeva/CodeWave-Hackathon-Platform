import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/TeamForm.css';

const TeamForm = () => {
  const navigate = useNavigate();
  const [team, setTeam] = useState([{ name: '', email: '' }]);

  const handleChange = (index, e) => {
    const newTeam = [...team];
    newTeam[index][e.target.name] = e.target.value;
    setTeam(newTeam);
  };

  const addMember = () => setTeam([...team, { name: '', email: '' }]);
  const removeMember = (index) => setTeam(team.filter((_, i) => i !== index));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Team submitted successfully!');
    navigate('/submit-project'); // go to project submission page
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Create Your Team</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <input type="text" name="name" placeholder="Member Name" value={member.name} onChange={(e) => handleChange(index, e)} required />
            <input type="email" name="email" placeholder="Member Email" value={member.email} onChange={(e) => handleChange(index, e)} required />
            {team.length > 1 && <button type="button" onClick={() => removeMember(index)}>Remove</button>}
          </div>
        ))}
        <button type="button" onClick={addMember}>Add Member</button>
        <button type="submit">Submit Team</button>
      </form>
    </div>
  );
};

export default TeamForm;
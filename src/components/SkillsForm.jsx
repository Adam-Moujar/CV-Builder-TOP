import { useState } from 'react';

function SkillsForm({ skills, updateSkills }) {
  const [skill, setSkill] = useState('');
  const [level, setLevel] = useState('intermediate');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skill.trim()) {
      updateSkills([...skills, { name: skill.trim(), level }]);
      setSkill('');
      setLevel('intermediate');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    updateSkills(updatedSkills);
  };

  return (
    <div>
      <h3>Technical Skills</h3>
      
      <form onSubmit={handleSubmit} className="skill-form">
        <div className="form-row">
          <div className="form-group skill-input">
            <label htmlFor="skill">Skill</label>
            <input
              type="text"
              id="skill"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="level">Level</label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        </div>
        
        <button type="submit" className="add-button">Add Skill</button>
      </form>
      
      <div className="items-list skills-list">
        <h4>Added Skills</h4>
        {skills.length === 0 ? (
          <p>No skills added yet.</p>
        ) : (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <div className="list-item skill-item">
                  <div>
                    <span>{skill.name}</span>
                    <span className={`skill-level ${skill.level}`}>
                      {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
                    </span>
                  </div>
                  <button 
                    type="button" 
                    className="remove-button"
                    onClick={() => removeSkill(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SkillsForm;
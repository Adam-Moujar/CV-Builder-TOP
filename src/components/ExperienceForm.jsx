import { useState } from 'react';

function ExperienceForm({ experience, addExperience, removeExperience }) {
  const [formState, setFormState] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formState);
    setFormState({
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      description: ''
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div>
      <h3>Work Experience</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formState.company}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formState.position}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formState.location}
            onChange={handleChange}
          />
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formState.startDate}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formState.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe your responsibilities and achievements"
          />
        </div>
        
        <button type="submit" className="add-button">Add Experience</button>
      </form>
      
      <div className="items-list">
        <h4>Added Experience</h4>
        {experience.length === 0 ? (
          <p>No experience added yet.</p>
        ) : (
          <ul>
            {experience.map((exp, index) => (
              <li key={index}>
                <div className="list-item">
                  <div>
                    <strong>{exp.position}</strong>
                    <div>{exp.company}, {exp.location}</div>
                    <div>
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="remove-button"
                    onClick={() => removeExperience(index)}
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

export default ExperienceForm;
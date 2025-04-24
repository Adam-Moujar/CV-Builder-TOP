import { useState } from 'react';

function EducationForm({ education, addEducation, removeEducation }) {
  const [formState, setFormState] = useState({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
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
    addEducation(formState);
    setFormState({
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      description: ''
    });
  };

  return (
    <div>
      <h3>Education</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={formState.institution}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={formState.degree}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="field">Field of Study</label>
          <input
            type="text"
            id="field"
            name="field"
            value={formState.field}
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
            rows="3"
          />
        </div>
        
        <button type="submit" className="add-button">Add Education</button>
      </form>
      
      <div className="items-list">
        <h4>Added Education</h4>
        {education.length === 0 ? (
          <p>No education added yet.</p>
        ) : (
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                <div className="list-item">
                  <div>
                    <strong>{edu.degree}</strong> in {edu.field}
                    <div>{edu.institution}</div>
                    <div>
                      {edu.startDate && new Date(edu.startDate).getFullYear()} - 
                      {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="remove-button"
                    onClick={() => removeEducation(index)}
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

export default EducationForm;
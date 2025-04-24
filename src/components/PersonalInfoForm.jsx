import { useState } from 'react';

function PersonalInfoForm({ personalInfo, updatePersonalInfo }) {
  const [formState, setFormState] = useState(personalInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePersonalInfo(formState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Personal Information</h3>
      
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formState.fullName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="profession">Profession</label>
        <input
          type="text"
          id="profession"
          name="profession"
          value={formState.profession}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formState.phone}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formState.address}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="summary">Professional Summary</label>
        <textarea
          id="summary"
          name="summary"
          value={formState.summary}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <button type="submit" className="save-button">Save</button>
    </form>
  );
}

export default PersonalInfoForm;
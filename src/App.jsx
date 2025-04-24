import { useState } from 'react';
import './App.css';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import CVPreview from './components/CVPreview';

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      profession: '',
      summary: ''
    },
    education: [],
    experience: [],
    skills: []
  });

  const [activeSection, setActiveSection] = useState('personal');

  const updatePersonalInfo = (personalInfo) => {
    setFormData(prevData => ({
      ...prevData,
      personalInfo
    }));
  };

  const addEducation = (education) => {
    setFormData(prevData => ({
      ...prevData,
      education: [...prevData.education, education]
    }));
  };

  const removeEducation = (index) => {
    setFormData(prevData => ({
      ...prevData,
      education: prevData.education.filter((_, i) => i !== index)
    }));
  };

  const addExperience = (experience) => {
    setFormData(prevData => ({
      ...prevData,
      experience: [...prevData.experience, experience]
    }));
  };

  const removeExperience = (index) => {
    setFormData(prevData => ({
      ...prevData,
      experience: prevData.experience.filter((_, i) => i !== index)
    }));
  };

  const updateSkills = (skills) => {
    setFormData(prevData => ({
      ...prevData,
      skills
    }));
  };

  const printCV = () => {
    window.print();
  };

  return (
    <div className="app">
      <div className="app-container">
        <header>
          <h1>CV Builder</h1>
        </header>
        
        <main>

          <div className="form-container">
            <div className="tabs">
              <button 
                className={activeSection === 'personal' ? 'active' : ''} 
                onClick={() => setActiveSection('personal')}
              >
                Personal Information
              </button>
              <button 
                className={activeSection === 'education' ? 'active' : ''} 
                onClick={() => setActiveSection('education')}
              >
                Education
              </button>
              <button 
                className={activeSection === 'experience' ? 'active' : ''} 
                onClick={() => setActiveSection('experience')}
              >
                Work Experience
              </button>
              <button 
                className={activeSection === 'skills' ? 'active' : ''} 
                onClick={() => setActiveSection('skills')}
              >
                Skills
              </button>
            </div>
            

            {activeSection === 'personal' && (
              <PersonalInfoForm 
                personalInfo={formData.personalInfo} 
                updatePersonalInfo={updatePersonalInfo} 
              />
            )}
            
            {activeSection === 'education' && (
              <EducationForm 
                education={formData.education} 
                addEducation={addEducation}
                removeEducation={removeEducation}
              />
            )}
            
            {activeSection === 'experience' && (
              <ExperienceForm 
                experience={formData.experience} 
                addExperience={addExperience}
                removeExperience={removeExperience}
              />
            )}
            
            {activeSection === 'skills' && (
              <SkillsForm 
                skills={formData.skills} 
                updateSkills={updateSkills} 
              />
            )}
          </div>
          

          <div className="preview-container">
            <h2>CV Preview</h2>
            <div className="cv-preview-wrapper">
              <CVPreview formData={formData} />
            </div>
            <button className="print-button" onClick={printCV}>
              Print CV
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
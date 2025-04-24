function CVPreview({ formData }) {
    const { personalInfo, education, experience, skills } = formData;
  
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
    };
  
    return (
      <div className="cv-document">
        <div className="cv-header">
          <h1 className="cv-name">{personalInfo.fullName || 'Your Name'}</h1>
          {personalInfo.profession && <p className="cv-title">{personalInfo.profession}</p>}
          
          <div className="cv-contact-info">
            {personalInfo.email && <div>{personalInfo.email}</div>}
            {personalInfo.phone && <div>{personalInfo.phone}</div>}
            {personalInfo.address && <div>{personalInfo.address}</div>}
          </div>
        </div>
        
        {personalInfo.summary && (
          <section className="cv-section">
            <h2>Professional Summary</h2>
            <p>{personalInfo.summary}</p>
          </section>
        )}
        
        {experience.length > 0 && (
          <section className="cv-section">
            <h2>Work Experience</h2>
            <div className="cv-items">
              {experience.map((exp, index) => (
                <div className="cv-item" key={index}>
                  <div className="cv-item-header">
                    <div className="cv-item-title">
                      <h3>{exp.position}</h3>
                      <div className="cv-item-subtitle">
                        {exp.company}
                        {exp.location && `, ${exp.location}`}
                      </div>
                    </div>
                    <div className="cv-item-date">
                      {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
                    </div>
                  </div>
                  {exp.description && <p>{exp.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {education.length > 0 && (
          <section className="cv-section">
            <h2>Education</h2>
            <div className="cv-items">
              {education.map((edu, index) => (
                <div className="cv-item" key={index}>
                  <div className="cv-item-header">
                    <div className="cv-item-title">
                      <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                      <div className="cv-item-subtitle">{edu.institution}</div>
                    </div>
                    <div className="cv-item-date">
                      {edu.startDate && new Date(edu.startDate).getFullYear()} - 
                      {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}
                    </div>
                  </div>
                  {edu.description && <p>{edu.description}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {skills.length > 0 && (
          <section className="cv-section">
            <h2>Skills</h2>
            <div className="cv-skills">
              {skills.map((skill, index) => (
                <div key={index} className="cv-skill">
                  <span className="cv-skill-name">{skill.name}</span>
                  <div className="cv-skill-level">
                    <div className={`cv-skill-bar ${skill.level}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  }
  
  export default CVPreview;
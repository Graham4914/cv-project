import React from "react";

export default function CVPreview({ generalInfo, educationList, experienceList }) {
  return (
    <article className="cv-preview">
      <header className="cv-header">
        <h1 className="cv-name">{generalInfo.name}</h1>
        <p className="cv-contact">
          <span className="cv-email">{generalInfo.email}</span>
          <span className="separator">|</span>
          <span className="cv-phone">{generalInfo.phone}</span>
          <span className="separator">|</span>
          <span className="cv-loction">{generalInfo.location}</span>
        </p>
      </header>
      <div className="cv-content">
      <section className="cv-section">
        <h3>Education</h3>
        {educationList && educationList.length > 0 ? (
          educationList.map((edu, index) => (
            <article key={index}>
              <h4>{edu.schoolName}</h4>
              <p>{edu.titleOfStudy}</p>
              <p>{edu.startDate} - {edu.endDate}</p>
            </article>
          ))
        ) : (
          <p>No Education Details Provided.</p>
        )}
      </section>

      <section className="cv-section">
        <h3>Experience</h3>
        {experienceList && experienceList.length > 0 ? (
          experienceList.map((exp, index) => (
            <article key={index}>
              <h4>{exp.positionTitle} at {exp.companyName}</h4>
              <p>{exp.responsibilities}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
            </article>
          ))
        ) : (
          <p>No experience details provided.</p>
        )}
      </section>
      </div>
    </article>
  );
}

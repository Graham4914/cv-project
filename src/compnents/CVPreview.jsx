import React from "react";

export default function CVPreview({generalInfo, educationList ,experienceList }) {
return(
   <section>
    <article>
        <header>
            <h2>{generalInfo.name}</h2>
        </header>
        <p><strong>Email:</strong> {generalInfo.email}</p> 
        <p><strong>Phone:</strong> {generalInfo.phone}</p>
    </article>

    <section>
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

    <section>
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
    </section>
);

}
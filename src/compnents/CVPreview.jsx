import React from "react";

export default function CVPreview({generalInfo, education, experience}) {
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
        {education && education.schoolName ? (
            <article>
                <h4>{education.schoolName}</h4>
                <p>{education.titleOfStudy}</p>
                <p>{education.startDate} - {education.endDate}</p>
            </article>
        ) : (
            <p>No Education Details Provided.</p>
        )}
    </section>

    <section>
        <h3>Experience</h3>
        {experience && experience.companyName ? (
            <article>
                <h4>{experience.positionTitle} at {experience.companyName}</h4>
                <p>{experience.responsibilities}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
            </article>
        ) : (
            <p>No experience details provided.</p>
        )}
    </section>
   </section>
);

}
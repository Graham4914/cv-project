import { useState } from 'react'
import GeneralInfoSection from './compnents/GeneralInfoSection';
import EducationSection from './compnents/EducationSection';
import ExperienceSection from './compnents/ExperienceSection';
import CVPreview from './compnents/CVPreview';
import './styles/layout.css'

function App() {
  const [generalInfo, setGeneralInfo] =useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ schoolName: '', titleOfStudy: '', startDate: '', endDate: ''});
  const [experience, setExperience] = useState({ companyName: '', positionTitle: '', responsibilities: '', startDate: '', endDate: ''});

  return (
    <main className='app-container'>
      <section className='editor-container'>
      <h1>CV Builder</h1>
     <GeneralInfoSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
     <EducationSection education={education} setEducation={setEducation} />
     <ExperienceSection experience={experience} setExperience={setExperience} />
     </section>

     <section className='preview-container'>
      <h1>CV Preview</h1>
      <p>YourCV preview will appear here.</p>
      <CVPreview
      generalInfo={generalInfo}
      education={education}
      experience={experience}
      />
     </section>
    </main>
  );
}
 


export default App

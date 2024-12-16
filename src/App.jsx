import { useState } from 'react'
import GeneralInfoSection from './compnents/GeneralInfoSection';
import EducationSection from './compnents/EducationSection';
import ExperienceSection from './compnents/ExperienceSection';
import CVPreview from './compnents/CVPreview';
import './styles/layout.css'

function App() {
  const [generalInfo, setGeneralInfo] =useState({ name: '', email: '', phone: '' });

  const [educationList, setEducationList] = useState([]);

  const [experienceList, setExperienceList] = useState([]);

  return (
    <main className='app-container'>
      <section className='editor-container'>
      <h1>CV Builder</h1>
     <GeneralInfoSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
     <EducationSection educationList={educationList} setEducationList={setEducationList} />
     <ExperienceSection experienceList={experienceList} setExperienceList={setExperienceList} />
     </section>

     <section className='preview-container'>
      <h1>CV Preview</h1>
      <p>YourCV preview will appear here.</p>
      <CVPreview
      generalInfo={generalInfo}
      educationList={educationList}
      experienceList={experienceList}
      />
     </section>
    </main>
  );
}
 


export default App

import { useEffect, useState } from 'react'
import GeneralInfoSection from './compnents/GeneralInfoSection';
import EducationSection from './compnents/EducationSection';
import ExperienceSection from './compnents/ExperienceSection';
import CVPreview from './compnents/CVPreview';
import './styles/layout.css';
import './styles/editor.css';


function App() {
  const storedGeneralInfo =
  JSON.parse(localStorage.getItem("generalInfo")) || {
    name: "",
    email: "",
    phone: "",
    location: "",
  };

  const [generalInfo, setGeneralInfo] =useState(storedGeneralInfo);

  const storedEducation = JSON.parse(localStorage.getItem("educationList")) || [];
  const [educationList, setEducationList] = useState(storedEducation);

  const storedExperience = JSON.parse(localStorage.getItem("experienceList")) || [];
  const [experienceList, setExperienceList] = useState(storedExperience);

useEffect(() => {
  localStorage.setItem("generalInfo", JSON.stringify(generalInfo));
},[generalInfo]);

useEffect(() => {
  localStorage.setItem("educationList", JSON.stringify(educationList));
}, [educationList]);

useEffect(() => {
  localStorage.setItem("experienceList", JSON.stringify(experienceList));
}, [experienceList]);


  return (
    <main className='app-container'>
      <section className='editor-container'>
      <h1>CV Builder</h1>
     <GeneralInfoSection generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
     <EducationSection educationList={educationList} setEducationList={setEducationList} />
     <ExperienceSection experienceList={experienceList} setExperienceList={setExperienceList} />
     </section>

     <section className='preview-container'>
      {/* <h1 className='preview-heading'>CV Preview</h1> */}
      <p>Your CV preview will appear here.</p>
      <button className="print-button" onClick={() => window.print()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            style={{ marginRight: "0.3rem" }}
          >
            <path d="M2 2v3h12V2H2zm2 9h8v3H4v-3zM1 7v4h3v2h8v-2h3V7H1z" />
          </svg>
          Print CV
        </button>
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

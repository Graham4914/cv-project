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
    name: "Alex Carter",
    email: " alex.carter@example.com",
    phone: "+44 7712345678",
    location: "London, UK",
  };

  const [generalInfo, setGeneralInfo] =useState(storedGeneralInfo);

  const storedEducation = JSON.parse(localStorage.getItem("educationList")) || [
  { 
    schoolName: "Westfield High School",
    titleOfStudy: "Electronics",
    startDate: "Sep 2010",
    endDate: "Jun 2014"
  },
  {
    schoolName: "University of Leeds",
    titleOfStudy: "BSc Computer Science",
    startDate: "Sep 2014",
    endDate: "Jun 2017"
  }
  ];
  const [educationList, setEducationList] = useState(storedEducation);

  const storedExperience = JSON.parse(localStorage.getItem("experienceList")) || [
    {
      positionTitle: "Junior Developer",
      companyName: "TechNova",
      responsibilities:
        "• Assisted in developing front-end features for e-commerce sites\n" +
        "• Worked with design teams to optimize user experience\n" +
        "• Collaborated on bug fixes and version releases",
      startDate: "Jul 2017",
      endDate: "Aug 2019"
    },
    {
      positionTitle: "Software Engineer",
      companyName: "CloudPoint Solutions",
      responsibilities:
        "• Implemented microservices architecture for the main product\n" +
        "• Led a small team to integrate third-party APIs\n" +
        "• Improved CI/CD pipelines, cutting deployment times by 30%",
      startDate: "Sep 2019",
      endDate: "Present"
    }
  ];


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

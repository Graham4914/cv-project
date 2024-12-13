import { useState } from 'react'
import GeneralInfoSection from './compnents/GeneralInfoSection';
import EducationSection from './compnents/EducationSection';
import ExperienceSection from './compnents/ExperienceSection';

function App() {
  return (
    <main>
      <h1>CV Builder</h1>
     <GeneralInfoSection />
     <EducationSection />
     <ExperienceSection />
    </main>
  );
}
 


export default App

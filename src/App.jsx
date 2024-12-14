import { useState } from 'react'
import GeneralInfoSection from './compnents/GeneralInfoSection';
import EducationSection from './compnents/EducationSection';
import ExperienceSection from './compnents/ExperienceSection';
import './styles/layout.css'

function App() {
  return (
    <main className='app-container'>
      <section className='editor-container'>
      <h1>CV Builder</h1>
     <GeneralInfoSection />
     <EducationSection />
     <ExperienceSection />
     </section>
     <section className='preview-container'>
      <h1>CV Preview</h1>
      <p>YourCV preview will appear here.</p>

     </section>
    </main>
  );
}
 


export default App

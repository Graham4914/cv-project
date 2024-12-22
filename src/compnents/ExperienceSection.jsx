import React, { useState } from "react";

function ExperienceSection({experienceList, setExperienceList}) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);
   const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);


    const [formData, setFormData] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startDate: '',
        endDate: ''
    });

    const handleToggleSection = () => {
      setIsSectionOpen(!isSectionOpen);
    };
  

    const handleAddClick = () => {
      if (!isSectionOpen) {
        setIsSectionOpen(true);
      }
        setIsFormVisible(true);
        setEditingIndex(null);
        setFormData({ companyName: '', positionTitle: '', responsibilities: '', startDate: '', endDate: '' });
    };

    
    const handleSave = (e) => {
        e.preventDefault();
        if (editingIndex === null) {
            setExperienceList([...experienceList, { ...formData }]);
        } else {
            const updatedList = [...experienceList];
            updatedList[editingIndex] = { ...formData };
            setExperienceList(updatedList);
        }
        setIsFormVisible(false);
        setEditingIndex(null);
    };


    const handleCancel = () => {
        setIsFormVisible(false);
        setEditingIndex(null);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setFormData({ ...experienceList[index] });
        setIsFormVisible(true);
        if (!isSectionOpen) setIsSelectionOpen(true);
    }

    const handleDelete = (index) => {
        const updatedList = experienceList.filter((_, i) => i !== index);
        setExperienceList(updatedList);
    }


    return (
        <section className="editor-section editor-experience">
          <div className="editor-section-header">
          <h2 className="editor-section-title">Experience</h2>
          <div className="editor-section-controls">
          <button type="button" onClick={handleToggleSection}
            aria-label="Toggle Experience section"
            aria-expanded={isSectionOpen}
            aria-controls="experience-content"
          >
            {isSectionOpen ? "▲" : "▼"}
            </button>
            <button type="button" onClick={handleAddClick}>+ Add</button>
        </div>
      </div>

          {isSectionOpen && (
            <div className="editor-section-content"
            id="experience-content"
            aria-label="Experience Entries"
            >
          {isFormVisible && (
            <form onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="companyName">Company Name:</label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="positionTitle">Position Title:</label>
                <input
                  type="text"
                  id="positionTitle"
                  value={formData.positionTitle}
                  onChange={(e) => setFormData({ ...formData, positionTitle: e.target.value })}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="responsibilities">Responsibilities:</label>
                <textarea
                  id="responsibilities"
                  value={formData.responsibilities}
                  onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="expStartDate">Start Date:</label>
                <input
                  type="text"
                  id="expStartDate"
                  placeholder="e.g. 01/2019"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                />
              </div>
    
              <div className="form-group">
                <label htmlFor="expEndDate">End Date:</label>
                <input
                  type="text"
                  id="expEndDate"
                  placeholder="e.g. present"
                  value={formData.endDate}
                  onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
              </div>
              <div className="save-cancel-controls">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          )}
    
          {experienceList.length > 0 && (
            <div className="editor-entries-list">
              <h3>Saved Experience Entries</h3>
              {experienceList.map((exp, index) => (
                <article key={index} className="editor-entry">
                  <h4>{exp.positionTitle} at {exp.companyName}</h4>
                  <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
                  <p>{exp.startDate} - {exp.endDate}</p>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </article>
              ))}
            </div>
          )}
          </div>
          )}
        </section>
      );
    }
    
    export default ExperienceSection;
import React, { useState } from "react";

function EducationSection({educationList, setEducationList }) {
 const [isSectionOpen, setIsSectionOpen] = useState(false);
 const [isFormVisible, setIsFormVisible] = useState(false);
 const [editingIndex, setEditingIndex] = useState(null);

 const [formData, setFormData] = useState({
    schoolName: '',
    titleOfStudy: '',
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
        setFormData({ schoolName: '', titleOfStudy: '', startDate: '', endDate: '' });
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (editingIndex === null) {
            setEducationList([...educationList, { ...formData }]);
        } else {
            const updatedList = [...educationList];
            updatedList[editingIndex] = { ...formData };
            setEducationList(updatedList);
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
        setFormData({ ...educationList[index] });
        setIsFormVisible(true);
        if (!isSectionOpen) setIsSelectionOpen(true);
    };

    const handleDelete = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
    };




    return (
        
        <section className="editor-section editor-education">
            <div className="editor-section-header">
            <h2 className="editor-section-title">Education</h2>
            <div className="editor-section-controls">
            <button type="button" onClick={handleToggleSection}
            aria-label="Toggle Education section"
            aria-expanded={isSectionOpen}
            aria-controls="education-content"
            >
            {isSectionOpen ? "▲" : "▼"}
            </button>

            <button type="button" onClick={handleAddClick}>+ Add</button>
            </div>
        </div>


        {isSectionOpen && (
            <div className="editor-section-content"
            id="education-content"
            aria-label="Education Entries"
            >
            {isFormVisible && (
                <form onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="schoolName">School Name:</label>
                        <input
                        type="text"
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value})}
                        />
                    </div>

        
                    <div className="form-group">
                        <label htmlFor="titleOfStudy">Title of Study:</label>
                        <input
                        type="text"
                        id="titleOfStudy"
                        value={formData.titleOfStudy}
                        onChange={(e) => setFormData({ ...formData, titleOfStudy: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                        type="text"
                        id="startDate"
                        placeholder="e.g. 08/2020"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value})}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="endDate">End Date:</label>
                        <input
                        type="text"
                        id="endDate"
                        placeholder="e.g. present"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value})}
                        />
                    </div>
                    <div className="editor-entry-button save-cancel-controls">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            )}
        
             {educationList.length > 0 && (
                <div className="editor-entries-list">
                    {educationList.map((edu, index) => (
                        <article key={index} className="editor-entry">
                            <h4>{edu.schoolName}</h4>
                            <p>{edu.titleOfStudy}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <button onClick={()=> handleEdit(index)}>Edit</button>
                            <button onClick={()=> handleDelete(index)}>Delete</button>
                        </article>
                    ))}
                </div>
             )}
             </div>
        )}
        </section>
    );
}

export default EducationSection;

























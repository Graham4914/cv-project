import React, { useState } from "react";

function EducationSection({educationList, setEducationList }) {
 const [isFormVisible, setIsFormVisible] = useState(false);
 const [editingIndex, setEditingIndex] = useState(null);

 const [formData, setFormData] = useState({
    schoolName: '',
    titleOfStudy: '',
    startDate: '',
    endDate: ''
  });


    const handleAddClick = () => {
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
    }

    const handleDelete = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
    }




    return (
        
        <section>
            <h2>Education</h2>
            <button onClick={handleAddClick}>+ Education</button>
            {isFormVisible && (
                <form onSubmit={handleSave}>
                    <div>
                        <label htmlFor="schoolName">School Name:</label>
                        <input
                        type="text"
                        id="schoolName"
                        value={formData.schoolName}
                        onChange={(e) => setFormData({ ...formData, schoolName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label htmlFor="titleOfStudy">Title of Study:</label>
                        <input
                        type="text"
                        id="titleOfStudy"
                        value={formData.titleOfStudy}
                        onChange={(e) => setFormData({ ...formData, titleOfStudy: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                        type="text"
                        id="startDate"
                        placeholder="e.g. 08/2020"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value})}
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate">End Date:</label>
                        <input
                        type="text"
                        id="endDate"
                        placeholder="e.g. present"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value})}
                        />
                    </div>

                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </form>
            )}
        
             {educationList.length > 0 && (
                <div>
                    <h3>Saved Education Entries</h3>
                    {educationList.map((edu, index) => (
                        <article key={index}>
                            <h4>{edu.schoolName}</h4>
                            <p>{edu.titleOfStudy}</p>
                            <p>{edu.startDate} - {edu.endDate}</p>
                            <button onClick={()=> handleEdit(index)}>Edit</button>
                            <button onClick={()=> handleDelete(index)}>Delete</button>
                        </article>
                    ))}
                </div>
             )}
        </section>
    );
}

export default EducationSection;

























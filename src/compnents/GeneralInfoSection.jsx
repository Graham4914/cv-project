import React, { useState } from "react";


function GeneralInfoSection({generalInfo, setGeneralInfo}) {
  const [isSectionOpen, setIsSectionOpen] = useState(false);

  const handleToggleSection = () => {
    setIsSectionOpen(!isSectionOpen);
  };

    return (
        <section className="editor-section aditor-general-info">
            <div className="editor-section-header">
            <h2 className="editor-section-title">Personal Information</h2>
            <button type="button" onClick={handleToggleSection}
            aria-label="Toggle Personal Information section"
            aria-expanded={isSectionOpen}
            aria-controls="personal-info-content"
            >
            {isSectionOpen ? "▲" : "▼"}
            </button>
            </div>

            {isSectionOpen && (
                <div className="editor-section-content"
                id="personal-info-content"
                aria-label="Personal Information Fields"
                >
                
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                     type="text"
                     id="name"
                     value={generalInfo.name}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, name: e.target.value})}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                     type="email"
                     id="email"
                     value={generalInfo.email}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, email: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                     type="tel"
                     id="phone"
                     value={generalInfo.phone}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, phone: e.target.value })}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                     type="text"
                     id="location"
                     value={generalInfo.location}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, location: e.target.value})}
                    />
                </div>
             </div>
            )}
        </section>
    );
}

export default GeneralInfoSection;
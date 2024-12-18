import React, { useState } from "react";


function GeneralInfoSection({generalInfo, setGeneralInfo}) {
  

    return (
        <section className="editor-section aditor-general-info">
            <h2 className="editor-section-title">Genral Information</h2>

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
        </section>
    );
}

export default GeneralInfoSection;
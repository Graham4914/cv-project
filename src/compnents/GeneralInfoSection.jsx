import React, { useState } from "react";


function GeneralInfoSection({generalInfo, setGeneralInfo}) {
  
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setIsEditing(false);
    // };


    // const handleEdit = () => {
    //     setIsEditing(true);
    // };

    return (
        <section>
            <h2>Genral Information</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                     type="text"
                     id="name"
                     value={generalInfo.name}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, name: e.target.value})}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                     type="email"
                     id="email"
                     value={generalInfo.email}
                     onChange={(e) =>
                         setGeneralInfo({ ...generalInfo, email: e.target.value })}
                    />
                </div>
                <div>
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
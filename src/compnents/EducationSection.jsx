import React, { useState } from "react";

function EducationSection() {
    const [isEditing, setIsEditing] = useState(true);
    const [schoolName, setSchoolName] = useState('');
    const [titleOfStudy, setTitleOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };
     
    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        
        <section>
            <h2>Education</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="schoolName">School Name:</label>
                        <input
                        type="text"
                        id="schoolName"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="titleOfStudy">Title of Study:</label>
                        <input
                        type="text"
                        id="titleOfStudy"
                        value={titleOfStudy}
                        onChange={(e) => setTitleOfStudy(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="startDate">Start Date:</label>
                        <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="endDate">End Date:</label>
                        <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>

                    <button type="submit">Submit</button>
                </form>
            ) : ( 
                <div>
                    <p><strong>School Name:</strong> {schoolName}</p>
                    <p><strong>Title of Study:</strong> {titleOfStudy}</p>
                    <p><strong>Start Date:</strong> {startDate}</p>
                    <p><strong>End Date:</strong> {endDate}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </section>
    );
}

export default EducationSection;































// function GeneralInfoSection() {
//     const [isEditing, setIsEditing] = useState(true);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsEditing(false);
//     };


//     const handleEdit = () => {
//         setIsEditing(true);
//     };

//     return (
//         <section>
//             <h2>Genral Information</h2>
//             {isEditing ? (
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                      type="text"
//                      id="name"
//                      value={name}
//                      onChange={(e) => setName(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                      type="email"
//                      id="email"
//                      value={email}
//                      onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                      type="tel"
//                      id="phone"
//                      value={phone}
//                      onChange={(e) => setPhone(e.target.value)}
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//             ) : (
//                 <div>
//                     <p><strong>Name:</strong> {name}</p>
//                     <p><strong>Email:</strong> {email}</p>
//                     <p><strong>Phone:</strong> {phone}</p>
//                     <button onClick={handleEdit}>Edit</button>
//                 </div>
//             )}
//         </section>
//     );
// }

// export default GeneralInfoSection;
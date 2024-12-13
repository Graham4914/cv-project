import React, { useState } from "react";

function ExperienceSection() {
    const [isEditing,setIsEditing] = useState(true);
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities,setResponsibilities] = useState('');
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
            <h2>Experience</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="companyName">Company Name</label>
                        <input type="text"
                        id="companyName"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="positionTitle">Position Title</label>
                        <input type="text"
                        id="positionTitle"
                        value={positionTitle}
                        onChange={(e) => setPositionTitle(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="responsibilities">Responsibilities</label>
                        <input type="text"
                        id="responsibilities"
                        value={responsibilities}
                        onChange={(e) => setResponsibilities(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="expStartDate">Start Date:</label>
                        <input type="date"
                        id="expStartDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="expEndDate">End Date:</label>
                        <input type="date"
                        id="expEndDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            ) : ( 
                <div>
                    <p><strong>Company Name:</strong> {companyName}</p>
                    <p><strong>Position Title:</strong> {positionTitle}</p>
                    <p><strong>Main Responsibilities:</strong> {responsibilities}</p>
                    <p><strong>Start Date:</strong> {startDate}</p>
                    <p><strong>End Date:</strong> {endDate}</p>

                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </section>
    );
}

export default ExperienceSection;
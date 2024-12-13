import React, { useState } from "react";


function GeneralInfoSection() {
    const [isEditing, setIsEditing] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };


    const handleEdit = () => {
        setIsEditing(true);
    };

    return (
        <section>
            <h2>Genral Information</h2>
            {isEditing ? (
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                     type="text"
                     id="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                     type="email"
                     id="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone:</label>
                    <input
                     type="tel"
                     id="phone"
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            ) : (
                <div>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
        </section>
    );
}

export default GeneralInfoSection;
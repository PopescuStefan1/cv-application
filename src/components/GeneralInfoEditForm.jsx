import { useState } from "react";
import "../styles/GeneralInfoEditForm.css";

function GeneralInfoEditForm({ generalInfo, setGeneralInfo }) {
    const [formData, setFormData] = useState({
        name: generalInfo.name,
        email: generalInfo.email,
        phoneNumber: generalInfo.phoneNumber,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setGeneralInfo(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <br />
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="+40723456789"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default GeneralInfoEditForm;

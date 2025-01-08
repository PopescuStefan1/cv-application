import { useState } from "react";
import "../styles/EditForm.css";

function WorkExperienceEditForm({ setWorkExperience }) {
    const [formData, setFormData] = useState({
        degree: "",
        field: "",
        university: "",
        location: "",
        startYear: "",
        endYear: "",
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
        setWorkExperience(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="degree">Degree:</label>
                <br />
                <input
                    type="text"
                    id="degree"
                    name="degree"
                    placeholder="Bachelor's degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="field">Field:</label>
                <br />
                <input
                    type="text"
                    id="field"
                    name="field"
                    placeholder="Computer Science"
                    value={formData.field}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="university">University:</label>
                <br />
                <input
                    type="text"
                    id="university"
                    name="university"
                    placeholder="University of Bucharest"
                    value={formData.university}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <br />
                <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Romania"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="startYear">Start year:</label>
                <br />
                <input
                    type="number"
                    min={1900}
                    max={2030}
                    id="startYear"
                    name="startYear"
                    placeholder="2024"
                    value={formData.startYear}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="endYear">End year (real or expected):</label>
                <br />
                <input
                    type="number"
                    min={1900}
                    max={2030}
                    id="endYear"
                    name="endYear"
                    placeholder="2026"
                    value={formData.endYear}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default WorkExperienceEditForm;

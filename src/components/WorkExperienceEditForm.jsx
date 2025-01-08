import { useState } from "react";
import "../styles/EditForm.css";

function WorkExperienceEditForm({ setWorkExperience }) {
    const [formData, setFormData] = useState({
        company: "",
        location: "",
        position: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        isCurrentPos: false,
        description: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = () => {
        setFormData({
            ...formData,
            isCurrentPos: !formData.isCurrentPos,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkExperience(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="company">Company:</label>
                <br />
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company 1"
                    value={formData.company}
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
                    placeholder="United States"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="position">Position:</label>
                <br />
                <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Software Engineer"
                    value={formData.position}
                    onChange={handleChange}
                    required
                />
                <br />
            </div>
            <div>
                <label htmlFor="startDate">Start Date:</label>
                <br />
                <select id="startMonth" name="startMonth" value={formData.startMonth} onChange={handleChange} required>
                    <option value="">Select Month</option>
                    {[
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December",
                    ].map((month, index) => (
                        <option key={index} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    id="startYear"
                    name="startYear"
                    placeholder="Year"
                    value={formData.startYear}
                    onChange={handleChange}
                    required
                    min="1900"
                    max={new Date().getFullYear()}
                />
                <br />
            </div>
            {!formData.isCurrentPos && (
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <br />
                    <select id="endMonth" name="endMonth" value={formData.endMonth} onChange={handleChange} required>
                        <option value="">Select Month</option>
                        {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ].map((month, index) => (
                            <option key={index} value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        id="endYear"
                        name="endYear"
                        placeholder="Year"
                        value={formData.endYear}
                        onChange={handleChange}
                        required
                        min="1900"
                        max={new Date().getFullYear()}
                    />
                    <br />
                </div>
            )}
            <div>
                <label htmlFor="currentPos">Currently working in this position? </label>
                <input
                    type="checkbox"
                    name="currentPos"
                    id="currentPos"
                    checked={formData.isCurrentPos}
                    onChange={handleCheckboxChange}
                />
                <br />
                <br />
            </div>
            <div>
                <label htmlFor="description">Job description</label>
                <br />
                <textarea
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default WorkExperienceEditForm;

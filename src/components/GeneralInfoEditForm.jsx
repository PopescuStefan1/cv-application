import { useState } from "react";

function GeneralInfoEditForm({ generalInfo }) {
    const [formData, setFormData] = useState({
        name: generalInfo.name,
        email: generalInfo.email,
        phoneNumber: generalInfo.phoneNumber,
    });

    const handleChange = (e) => {
        const { field, value } = e.target;
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = (e) => {
        console.log(e);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" id="name" name="name" value={generalInfo.name} onChange={handleChange} />
                <br />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                <br />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <br />
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default GeneralInfoEditForm;

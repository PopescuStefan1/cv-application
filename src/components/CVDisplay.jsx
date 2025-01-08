import "../styles/CVDisplay.css";

function CVDisplay({ userData }) {
    return (
        <div id="cv-container">
            <div id="header">
                <h1>{userData.generalInfo?.name ?? ""}</h1>
                <div id="contact-info">
                    <span>{userData.generalInfo?.email ?? ""}</span>
                    <span>|</span>
                    <span>{userData.generalInfo?.phoneNumber ?? ""}</span>
                </div>
            </div>
            <div id="work-experiences">
                <h2>Work Experience</h2>
                <div className="separator"></div>
                {userData.workExperience.map((item, index) => (
                    <div key={index}>
                        <div className="work-info">
                            <div>
                                {item.company}, {item.location}
                            </div>
                            <div>|</div>
                            <div>{item.position}</div>
                            <div>|</div>
                            <div>
                                {item.startDate} - {item.endDate}
                            </div>
                        </div>
                        <div
                            className="work-description"
                            dangerouslySetInnerHTML={{ __html: formatWorkDescription("<li>" + item.description) }}
                        ></div>
                    </div>
                ))}
            </div>
            <div id="education">
                <h2>Education</h2>
                <div className="separator"></div>
                {userData.education.map((item, index) => (
                    <div key={index}>
                        <div className="education-info">
                            {item.type} in {item.field}, {item.startYear} - {item.endYear}
                        </div>
                        <div className="university-info">
                            {item.university}, {item.location}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function formatWorkDescription(description) {
    return description.replace(/\n/g, "<li>");
}

export default CVDisplay;

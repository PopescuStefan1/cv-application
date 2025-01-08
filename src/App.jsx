import { useState } from "react";
import "./App.css";
import CVDisplay from "./components/CVDisplay";
import mockUserData from "./assets/mockUserData";
import GeneralInfoEditForm from "./components/GeneralInfoEditForm";
import EducationEditForm from "./components/EducationEditForm";
import WorkExperienceEditForm from "./components/WorkExperienceEditForm";

function App() {
    const [userData, setUserData] = useState(mockUserData);
    const [editState, setEditState] = useState(null);

    const title =
        editState === "general-info-edit"
            ? "Edit General Info"
            : editState === "work-experience-edit"
            ? "Edit Work Experience"
            : editState === "education-edit"
            ? "Edit Education"
            : "CV Maker";

    const setGeneralInfo = (updatedGeneralInfo) => {
        setEditState(null);
        setUserData({ ...userData, generalInfo: updatedGeneralInfo });
    };

    const setWorkExperience = (addedWorkExperience) => {
        const updatedWorkExperience = {
            company: addedWorkExperience.company,
            location: addedWorkExperience.location,
            position: addedWorkExperience.position,
            startDate: `${addedWorkExperience.startMonth} ${addedWorkExperience.startYear}`,
            endDate: addedWorkExperience.isCurrentPos
                ? "Present"
                : `${addedWorkExperience.endMonth} ${addedWorkExperience.endYear}`,
            description: addedWorkExperience.description,
        };

        setEditState(null);
        setUserData({ ...userData, workExperience: [updatedWorkExperience, ...userData.workExperience] });
    };

    const removeWorkExperience = (index) => {
        const updatedWorkExperience = [...userData.workExperience];
        updatedWorkExperience.splice(index, 1);
        setUserData({ ...userData, workExperience: updatedWorkExperience });
    };

    const setEducation = (addedEducation) => {
        setEditState(null);
        setUserData({ ...userData, education: [addedEducation, ...userData.education] });
    };

    const removeEducation = (index) => {
        const updatedEducation = [...userData.education];
        updatedEducation.splice(index, 1);
        setUserData({ ...userData, education: updatedEducation });
    };

    return (
        <>
            <div id="container-grid">
                <h1>{title}</h1>
                {editState === null && (
                    <CVDisplay
                        userData={userData}
                        setEditState={setEditState}
                        removeWorkExperience={removeWorkExperience}
                        removeEducation={removeEducation}
                    />
                )}
                {editState === "general-info-edit" && (
                    <GeneralInfoEditForm generalInfo={userData.generalInfo} setGeneralInfo={setGeneralInfo} />
                )}
                {editState === "work-experience-edit" && (
                    <WorkExperienceEditForm setWorkExperience={setWorkExperience} />
                )}
                {editState === "education-edit" && <EducationEditForm setEducation={setEducation} />}
            </div>
        </>
    );
}

export default App;

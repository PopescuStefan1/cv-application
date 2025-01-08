import { useState } from "react";
import "./App.css";
import CVDisplay from "./components/CVDisplay";
import mockUserData from "./assets/mockUserData";
import GeneralInfoEditForm from "./components/GeneralInfoEditForm";
import EducationEditForm from "./components/EducationEditForm";

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

    const setEducation = (updatedEducation) => {
        setEditState(null);
        setUserData({ ...userData, education: [updatedEducation, ...userData.education] });
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
                    <CVDisplay userData={userData} setEditState={setEditState} removeEducation={removeEducation} />
                )}
                {editState === "general-info-edit" && (
                    <GeneralInfoEditForm generalInfo={userData.generalInfo} setGeneralInfo={setGeneralInfo} />
                )}
                {editState === "education-edit" && (
                    <EducationEditForm education={userData.education} setEducation={setEducation} />
                )}
            </div>
        </>
    );
}

export default App;

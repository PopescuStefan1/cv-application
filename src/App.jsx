import { useState } from "react";
import "./App.css";
import CVDisplay from "./components/CVDisplay";
import mockUserData from "./assets/mockUserData";
import GeneralInfoEditForm from "./components/GeneralInfoEditForm";

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

    return (
        <>
            <div id="container-grid">
                <h1>{title}</h1>
                {editState === null && <CVDisplay userData={userData} setEditState={setEditState} />}
                {editState === "general-info-edit" && <GeneralInfoEditForm generalInfo={userData.generalInfo} />}
            </div>
        </>
    );
}

export default App;

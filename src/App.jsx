import { useState } from "react";
import "./App.css";
import CVDisplay from "./components/CVDisplay";
import mockUserData from "./assets/mockUserData";

function App() {
    const [userData, setUserData] = useState(mockUserData);

    return (
        <>
            <div id="container-grid">
                <h1>CV Maker</h1>
                <CVDisplay userData={userData}></CVDisplay>
                <button className="edit-button">Edit</button>
                <div id="education-display"></div>
                <button id="education-edit">Edit</button>
                <div id="work-info-display"></div>
                <button id="work-info-edit">Edit</button>
            </div>
        </>
    );
}

export default App;

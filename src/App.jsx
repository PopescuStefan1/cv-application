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
            </div>
        </>
    );
}

export default App;

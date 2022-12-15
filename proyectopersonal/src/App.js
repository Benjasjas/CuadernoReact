import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AutoPage, HomePage } from "./pages";
import RickRollPage from "./pages/RickRoll";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/Auto" element={<AutoPage />} />
                <Route path="/RickRoll" element={<RickRollPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
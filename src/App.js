import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Timeline from "./Timeline";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    )
   
}

export default App;
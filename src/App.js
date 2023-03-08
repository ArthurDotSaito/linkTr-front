import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TimeLinePage from "./pages/timeline/TimelinePage";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<TimeLinePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
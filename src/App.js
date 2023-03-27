
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import Timeline from "./pages/timeline/Timeline";
import UserContext from "./contexts/Context";
import TimelineHashtag from "./pages/timelineHashtag/timelineHashtag";
import TimelineUser from "./pages/timeline/userTimeline";


function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = { user, setUser, token, setToken };


  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<RegistrationPage />} />
          <Route path="/timelines" element={<Timeline />} />
          <Route path="/timelines/:id" element={<TimelineUser />} />
          <Route path="/hashtag/:hashtag" element={<TimelineHashtag/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

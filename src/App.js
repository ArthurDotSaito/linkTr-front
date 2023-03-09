
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import Timeline from "./Timeline";
import UserContext from "./contexts/Context";


function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));
  const contextValue = { user, setUser, token, setToken };

  return (
    <UserContext.Provider value={contextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
        <Routes>
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;

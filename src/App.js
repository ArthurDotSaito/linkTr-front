
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthProvider from "./contexts/Context";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import Timeline from "./Timeline";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/signup" element={<RegistrationPage />} />
        </Routes>
        <Routes>
          <Route path="/timelines" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

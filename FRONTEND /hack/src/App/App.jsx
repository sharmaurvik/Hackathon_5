import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatbotPage from "../chatbot/chatbot.jsx";
import LoginPage from "../loginpage/loginpage.jsx";
import LogoutPage from "../logout/logoutpage.jsx";
import SignupPage from "../signup/signup.jsx";
import EditProfilePage from "../editprofilepage/editprofilepage.jsx";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/logoutpage" element={<LogoutPage />} />
          <Route path="/signuppage" element={<SignupPage />} />
          <Route
            path="/chatbotpage"
            element={
              <ProtectedRoute>
                <ChatbotPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editprofilepage"
            element={
              <ProtectedRoute>
                <EditProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

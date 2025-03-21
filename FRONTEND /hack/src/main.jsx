import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App.jsx";
import LoginPage from "./loginpage/loginpage.jsx";
import LogoutPage from "./logout/logoutpage.jsx";
import ChatbotPage from "./chatbot/chatbot.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <ChatbotPage/>, */}
  </StrictMode>
);

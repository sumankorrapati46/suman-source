import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import Email from "./pages/Email";
import Mobile from "./pages/Mobile";
import Security from "./pages/Security";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./pages/RegistrationForm";
import ForgotUsername from "./pages/ForgotUsername";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Loginpage";
import { MdPerson } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiGridAlt } from "react-icons/bi";
import Logo from "./assets/Logo.png";
import "./App.css";

// User profile icon component
const UserProfileIcon = ({ size = 40, color = "blue" }) => {
  return <FaUserCircle size={size} color={color} />;
};

// Layout Wrapper to include sidebar and frames
const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* Top Frame */}
      <div className="top-frame">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="top-icons">
          <UserProfileIcon size={20} color="black" />
          <BiGridAlt size={20} color="black" />
        </div>
      </div>

      {/* Bottom Frame (Sidebar + Main Content) */}
      <div className="bottom-frame">
        {/* Sidebar */}
        <div className="frame frame-25">
          <div className="sidebar">
            <ul className="menu">
              <li>
                <Link to="/profile">
                  <h2>
                    <MdPerson size={40} color="blue" /> Profile
                  </h2>
                </Link>
                <ul className="submenu">
                  <li>
                    <Link to="/personal-info">•PersonalInformation</Link>
                  </li>
                  <li>
                    <Link to="/email">•EmailAddress</Link>
                  </li>
                  <li>
                    <Link to="/mobile">•MobileNumbers</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/security">
                  <h2>🔒Security</h2>
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <h2>⚙️Settings</h2>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="frame frame-75">{children}</div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Now inside Router, so it works fine

  // Routes that should NOT have sidebar and frames
  const noFrameRoutes = ["/login", "/register", "/forgot-username", "/forgot-password"];

  return (
    <Routes>
      {/* Routes without Frames */}
      {noFrameRoutes.map((path) => (
        <Route key={path} path={path} element={getPageComponent(path)} />
      ))}

      {/* Routes with Sidebar and Frames */}
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/personal-info" element={<PersonalInfo />} />
              <Route path="/email" element={<Email />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/security" element={<Security />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

// Helper function to return the correct component for full-page routes
function getPageComponent(path) {
  switch (path) {
    case "/login":
      return <Login />;
    case "/register":
      return <RegistrationForm />;
    case "/forgot-username":
      return <ForgotUsername />;
    case "/forgot-password":
      return <ForgotPassword />;
    default:
      return null;
  }
}

export default App;

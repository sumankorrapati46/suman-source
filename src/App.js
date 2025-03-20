import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import Profile from "./pages/Profile";
import PersonalInfo from "./pages/PersonalInfo";
import Email from "./pages/Email";
import AddEmailAddress from "./pages/AddEmailAddress";
import Mobile from "./pages/Mobile";
import AddMobileNumber from "./pages/AddMobileNumber"; 
import Password from "./pages/Password";
import ChangePassword from "./pages/ChangePassword";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./pages/RegistrationForm";
import ForgotUsername from "./pages/ForgotUsername";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Loginpage";
import DeviceSignIns from "./pages/DeviceSignIns";
import ManageDevices from "./pages/ManageDevices";
import Preferences from "./pages/Preferences";
import AuthorizedWebsites from "./pages/AuthorizedWebsites";
import LinkedAccounts from "./pages/LinkedAccounts";
import CloseAccount from "./pages/CloseAccount"; 
import AddLinkedAccounts from "./pages/AddLinkedAccounts";
import { MdPerson } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiGridAlt } from "react-icons/bi";
import Logo from "./assets/Logo.png";
import CloseAccountSteps from "./pages/CloseAccountSteps";
import GridPage from "./pages/Gridpage";
import UserDropdown from "./pages/Userdropdown";
import "./styles/Layout.css";

const Layout = ({ children }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showSecurityMenu, setShowSecurityMenu] = useState(false);
  const [showSettingMenu, setShowSettingMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="top-frame">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="top-right-icon" onClick={() => setDropdownOpen(!isDropdownOpen)}>
          <Link to="/UserDropdown">
            <FaUserCircle className="user-icon" size={25} />
          </Link>
          <UserDropdown isOpen={isDropdownOpen} toggleDropdown={setDropdownOpen} />
          <Link to="/grid">
            <BiGridAlt size={25} color="black" />
          </Link>
        </div>
      </div>

      <div className="bottom-frame">
        <div className="frame frame-25">
          <div className="sidebar">
            <ul className="menu">
              <li>
                <h2 onClick={() => setShowProfileMenu(!showProfileMenu)} style={{ cursor: "pointer" }}>
                  <MdPerson size={20} color="black" /> <Link to="/profile">Profile</Link>
                </h2>
                {showProfileMenu && (
                  <ul className="submenu">
                    <li><Link to="/personal-info">• Personal Information</Link></li>
                    <li><Link to="/email">• Email Address</Link></li>
                    <li><Link to="/mobile">• Mobile Numbers</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <h2 onClick={() => setShowSecurityMenu(!showSecurityMenu)} style={{ cursor: "pointer" }}>
                  🛡️ <Link to="/security">Security</Link>
                </h2>
                {showSecurityMenu && (
                  <ul className="submenu">
                    <li><Link to="/password">• Password</Link></li>
                    <li><Link to="/device-signins">• Device Sign-Ins</Link></li>
                  </ul>
                )}
              </li>
              <li>
                <h2 onClick={() => setShowSettingMenu(!showSettingMenu)} style={{ cursor: "pointer" }}>
                  ⚙️ <Link to="/settings">Settings</Link>
                </h2>
                {showSettingMenu && (
                  <ul className="submenu">
                    <li><Link to="/preferences">• Preferences</Link></li>
                    <li><Link to="/authorized-websites">• Authorized Websites</Link></li>
                    <li><Link to="/linked-accounts">• Linked Accounts</Link></li>
                    <li><Link to="/close-account">• Close Account</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
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
  const location = useLocation();
  const noFrameRoutes = ["/login", "/register", "/forgot-username", "/forgot-password"];

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />

      {noFrameRoutes.map((path) => (
        <Route key={path} path={path} element={getPageComponent(path)} />
      ))}

      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/profile" element={<PersonalInfo />} />
              <Route path="/personal-info" element={<Profile />} />
              <Route path="/email" element={<Email />} />
              <Route path="/add-email" element={<AddEmailAddress />} />
              <Route path="/mobile" element={<Mobile />} />
              <Route path="/add-mobile" element={<AddMobileNumber />} />
              <Route path="/password" element={<Password />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/device-signins" element={<DeviceSignIns />} />
              <Route path="/manage-devices" element={<ManageDevices />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="/authorized-websites" element={<AuthorizedWebsites />} />
              <Route path="/add-linked-accounts" element={<AddLinkedAccounts />} />
              <Route path="/linked-accounts" element={<LinkedAccounts />} />
              <Route path="/close-account" element={<CloseAccount />} />
              <Route path="/close-account-steps" element={<CloseAccountSteps />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/grid" element={<GridPage />} />
              <Route path="/UserDropdown" element={<UserDropdown />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  );
}

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

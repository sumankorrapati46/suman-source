import React from "react";
import { FaUserCog, FaWrench, FaMoneyBillWave, FaUsers, FaCogs, FaClipboardList, FaLaptopCode } from "react-icons/fa"; 
import "../styles/Grid.css";

const GridPage = () => {
  const featuredModules = [
    { icon: <FaUsers size={40} color="#007bff" />, label: "Employee Management" },
    { icon: <FaUserCog size={40} color="#ff6600" />, label: "Role Management" },
    { icon: <FaLaptopCode size={40} color="green" />, label: "AI-Based Dashboard Customization" },
    { icon: <FaUsers size={40} color="red" />, label: "User Management" },
    { icon: <FaWrench size={40} color="blue" />, label: "Custom Form Builder" },
    { icon: <FaCogs size={40} color="green" />, label: "Admin Management" },
    { icon: <FaMoneyBillWave size={40} color="brown" />, label: "Payments Module" },
    { icon: <FaClipboardList size={40} color="darkgreen" />, label: "API Configurations Module" }
  ];

  return (
    <div className="featured-section">
        <h2>Featured</h2>
        <div className="grid-container">
          {featuredModules.map((module, index) => (
            <div className="grid-item" key={index}>
              {module.icon}
              <p>{module.label}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default GridPage;

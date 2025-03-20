import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ManageDevices.css";

const ManageDevices = () => {
  const navigate = useNavigate();
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/devices")
      .then((response) => response.json())
      .then((data) => {
        setDevices(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching devices:", error);
        setLoading(false);
      });
  }, []);

  const handleRemoveDevice = (id) => {
  
    fetch(`https://api.example.com/devices/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setDevices(devices.filter((device) => device.id !== id)); 
        alert("Device removed successfully!");
      })
      .catch((error) => console.error("Error removing device:", error));
  };

  return (
    <div className="manage-devices-container">
      <h2>Manage Device Sign-ins</h2>

      {loading ? (
        <p>Loading devices...</p>
      ) : devices.length > 0 ? (
        <ul className="device-list">
          {devices.map((device) => (
            <li key={device.id}>
              <div>
                <strong>{device.name}</strong>
                <p>{device.location}</p>
              </div>
              <button className="remove-btn" onClick={() => handleRemoveDevice(device.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active devices found.</p>
      )}

      <button className="cancel" onClick={() => navigate("/device-signins")}>
        Back to Device Sign-ins
      </button>
    </div>
  );
};

export default ManageDevices;

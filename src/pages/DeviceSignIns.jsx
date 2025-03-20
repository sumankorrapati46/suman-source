import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Device.css";

const DeviceSignIns = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await axios.get("https://api.example.com/devices"); 
        setDevices(response.data);
      } catch (err) {
        setError("Failed to load device data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleRemoveDevice = async (deviceId) => {
    try {
      await axios.delete(`https://api.example.com/devices/${deviceId}`);
      setDevices(devices.filter(device => device.id !== deviceId));
    } catch (err) {
      setError("Error removing device. Try again.");
    }
  };

  return (
    <div className="device-container">
      <h2>Device Sign-ins</h2>
      
      <div className="device-signin">
        <h3>My Devices</h3>
        <p>
          Here you can see the devices you have used to sign in to your account.  
          You can also remove access from a device if you don't recognize it.
        </p>

        {error && <p className="error">{error}</p>}

        {loading ? (
          <p className="loading">Loading devices...</p>
        ) : (
          <ul className="device-list">
            {devices.map((device) => (
              <li key={device.id} className="device-item">
                <div className="device-info">
                  <span className="device-name">{device.name}</span>
                  <span className="device-location">{device.location}</span>
                  <span className="device-time">Last Active: {device.lastActive}</span>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveDevice(device.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="manage-btn-container">
          <Link to="/manage-devices" className="manage-btn">Manage Devices</Link>
        </div>
      </div>
    </div>
  );
};

export default DeviceSignIns;


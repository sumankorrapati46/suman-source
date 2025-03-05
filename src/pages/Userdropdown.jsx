import React, { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdMenuBook, MdSecurity } from "react-icons/md"; 
import { BiMessageDetail } from "react-icons/bi"; 
import { AiFillContacts } from "react-icons/ai"; 
import "../styles/UserDropdown.css"; 
const UserDropdown = ({ isOpen, toggleDropdown }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        toggleDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleDropdown]);

  return (
    isOpen && (
      <div className="dropdown-menu" ref={dropdownRef}>
        <div className="user-info">
            <FaUserCircle className="user-icon" size={60}  />
          <h3>User</h3>
          <p>user@gmail.com</p>
          <p>User ID: 12345678</p>
          <button className="sign-out-btn">
            <IoMdLogOut /> Sign Out
          </button>
        </div>

        <div className="help-docs">
          <h4>HELP DOCUMENTS</h4>
          <ul>
            <li>
              <MdMenuBook className="icon green" /> User Guide
            </li>
            <li>
              <MdMenuBook className="icon orange" /> Developer Guide
            </li>
            <li>
              <BiMessageDetail className="icon red" /> FAQs
            </li>
            <li>
              <MdSecurity className="icon teal" /> Best Practices for Security
            </li>
            <li>
              <AiFillContacts className="icon blue" /> Contact Us
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default UserDropdown;

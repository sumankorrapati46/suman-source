import React, { useEffect, useState } from "react";
import UserTable from "./UserProfile";
import "../App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UserList;

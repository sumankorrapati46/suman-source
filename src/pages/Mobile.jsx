import React, { useState } from "react";
import "../App.css";

const Mobile = () => {
  const [mobile, setMobile] = useState("");

  return (
    <div>
      <h2>Mobile Number</h2>
      <p>Update or add your mobile number.</p>
      <input
        type="text"
        placeholder="Enter new mobile number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button>Save Mobile</button>
    </div>
  );
};

export default Mobile;

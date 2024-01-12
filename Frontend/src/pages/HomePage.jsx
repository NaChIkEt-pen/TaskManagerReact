import React from "react";

export default function HomePage() {
  return (
    <div>
      <a href="http://localhost:5173/admin/login">
        <button className="btn btn-primary" style={{ marginRight: "30px" }}>
          ADMIN LOGIN
        </button>
      </a>

      <a href="http://localhost:5173/emp/login">
        <button className="btn btn-primary">EMPLOYEE LOGIN</button>
      </a>
    </div>
  );
}

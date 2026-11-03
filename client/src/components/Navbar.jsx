// src/components/Navbar.jsx

import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const logoutHandler = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <div className="navbar">
      <h3>Attendance Management</h3>

      <div>
        <span>
          {user?.firstName}
        </span>

        <button
          onClick={logoutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
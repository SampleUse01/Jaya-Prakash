import { Link } from "react-router-dom";

function Sidebar() {

    const userData = JSON.parse(localStorage.getItem("user"));

    console.log("userData", userData)


    return (
        <div className="sidebar">

            <h2>AMS</h2>

            <Link to="/dashboard">
                Dashboard
            </Link>

            {userData?.role === "SUPER_ADMIN" && (
                <Link to="/users">
                    Users
                </Link>
            )}

            {/* <Link to="/employees">
        Employees
      </Link> */}

            <Link to="/attendance">
                Attendance
            </Link>

            {/* <Link to="/shifts">
        Shifts
      </Link>

      <Link to="/reports">
        Reports
      </Link> */}

        </div>
    );
}

export default Sidebar;
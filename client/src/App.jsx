import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Attendance from "./pages/attendance/Attendance";
import Employees from "./pages/employees/Employees";
import Users from "./pages/users/Users";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/employees"
          element={<Employees />}
        />

        <Route
          path="/attendance"
          element={<Attendance />}
        />
        <Route
          path="/users"
          element={<Users />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
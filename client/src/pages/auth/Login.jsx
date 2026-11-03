import { useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      localStorage.setItem(
        "accessToken",
        response.data.data.accessToken
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.data.user
        )
      );

      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={loginHandler}
      >
        <h2>Attendance System</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
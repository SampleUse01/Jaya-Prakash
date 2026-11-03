import { useState } from "react";
import api from "../../api/axios";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "SUPER_ADMIN",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/auth/register",
        form
      );

      console.log(res.data);

      alert("User Created");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="First Name"
        onChange={(e) =>
          setForm({
            ...form,
            firstName: e.target.value,
          })
        }
      />

      <input
        placeholder="Last Name"
        onChange={(e) =>
          setForm({
            ...form,
            lastName: e.target.value,
          })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <select
        onChange={(e) =>
          setForm({
            ...form,
            role: e.target.value,
          })
        }
      >
        <option value="SUPER_ADMIN">
          SUPER_ADMIN
        </option>

        <option value="ADMIN">
          ADMIN
        </option>

        <option value="USER">
          USER
        </option>
      </select>

      <button type="submit">
        Register
      </button>
    </form>
  );
}

export default Register;

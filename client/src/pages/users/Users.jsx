import {
  useEffect,
  useState,
} from "react";

import MainLayout from "../../layouts/MainLayout";

import {
  getUsers,
  createUser,
  deleteUser,
} from "../../api/userApi";

function Users() {
  const [users, setUsers] =
    useState([]);

  const [form, setForm] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: "USER",
    });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res =
        await getUsers();

      setUsers(
        res.data.data
      );
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler =
    async (e) => {
      e.preventDefault();

      try {
        await createUser(form);

        loadUsers();

        setForm({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          role: "USER",
        });

      } catch (error) {
        console.log(error);
      }
    };

  const handleDelete =
    async (id) => {
      try {

        await deleteUser(id);

        loadUsers();

      } catch (error) {
        console.log(error);
      }
    };

  return (
    <MainLayout>

      <h1>
        User Management
      </h1>

      <br />

      <form
        onSubmit={
          submitHandler
        }
      >

        <input
          placeholder="First Name"
          value={
            form.firstName
          }
          onChange={(e) =>
            setForm({
              ...form,
              firstName:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Last Name"
          value={
            form.lastName
          }
          onChange={(e) =>
            setForm({
              ...form,
              lastName:
                e.target.value,
            })
          }
        />

        <input
          placeholder="Email"
          value={
            form.email
          }
          onChange={(e) =>
            setForm({
              ...form,
              email:
                e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={
            form.password
          }
          onChange={(e) =>
            setForm({
              ...form,
              password:
                e.target.value,
            })
          }
        />

        <select
          value={form.role}
          onChange={(e) =>
            setForm({
              ...form,
              role:
                e.target.value,
            })
          }
        >
          <option value="USER">
            USER
          </option>

          <option value="ADMIN">
            ADMIN
          </option>
        </select>

        <button
          type="submit"
        >
          Add User
        </button>

      </form>

      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>

            <th>Email</th>

            <th>Role</th>

            <th>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>

          {users.map(
            (user) => (
              <tr
                key={
                  user._id
                }
              >
                <td>
                  {
                    user.firstName
                  }
                  {" "}
                  {
                    user.lastName
                  }
                </td>

                <td>
                  {user.email}
                </td>

                <td>
                  {user.role}
                </td>

                <td>

                  <button
                    onClick={() =>
                      handleDelete(
                        user._id
                      )
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>
      </table>

    </MainLayout>
  );
}

export default Users;
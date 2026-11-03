import api from "./axios";

export const getUsers = async () => {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  return await api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = async (
  data
) => {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  return await api.post(
    "/users",
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteUser = async (
  id
) => {
  const token =
    localStorage.getItem(
      "accessToken"
    );

  return await api.delete(
    `/users/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

const loginUser = async (credentials) => {
  return await fetch("http://localhost:3002/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

const registerUser = async (credentials) => {
  return await fetch("http://localhost:3002/admin/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
const userinfoStorage = (userInfo) => {
  localStorage.setItem("token", userInfo.token);
  localStorage.setItem("userInfo", JSON.stringify(userInfo.data));
};
export const userService = {
  loginUser,
  registerUser,
  userinfoStorage,
};

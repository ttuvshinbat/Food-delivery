import { useEffect, useContext, useState, createContext } from "react";
const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}
export const UserProvider = (props) => {
  const [user, setUser] = useState();
  useEffect(() => {
    if (localStorage.getItem("userinfo")) {
      const data = JSON.parse(localStorage.getItem("userInfo"));
      console.log(data);
      setUser({
        userName: data.name,
        email: data.email,
        address: data.address,
        id: data._id,
      });
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

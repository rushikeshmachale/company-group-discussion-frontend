import { React, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const [id, setId] = useState();

  return (
    <UserContext.Provider
      value={{ role, setRole, username, setUsername, id, setId }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

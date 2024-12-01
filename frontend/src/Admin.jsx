import React, { useEffect } from "react";
import { Socket } from "./App";

const Admin = () => {
  const [msg, setMsg] = React.useState([]);
  Socket.on("message", (message) => {
    setMsg([...msg, message]);
  });
  
  return <div>{msg.length}</div>;
};

export default Admin;

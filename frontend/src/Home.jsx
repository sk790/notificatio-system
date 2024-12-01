import React, { useEffect } from "react";
import { io } from "socket.io-client";
import { Socket } from "./App";

const Home = () => {
  // const Socket = io("http://localhost:3000");


  const submit = (e) => {
    e.preventDefault();
    const message = e.target[0].value;
    Socket.emit("message", message);
  }
  useEffect(() => {
    return () => {
      Socket.disconnect();
    };
  }, []);
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter message" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Home;

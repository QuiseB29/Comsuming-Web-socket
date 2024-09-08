import { useEffect, useState } from "react";
import { io } from 'socket.io-client';
import React from "react";
import { Container } from "react-bootstrap";
import SimpleChatBody from "./components/SimpleChatbox";
import SimpleMessageInput from "./components/SimpleMessageinput";


const socket = io('http://127.0.0.1:5000');

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);


  useEffect(() =>{
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server ");
      setIsConnected(true)
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
      setIsConnected(false)
    })
  }, [isConnected]);


  return (
    <div>
      <h1>Welcome to React with Sockets</h1>
      <p>Connection Status:
        {isConnected ? "Connected" : "Not Connected"}
      </p>
      <Container>
        <h2>Chat Room</h2>
        <Container>
            <SimpleChatBody socket={socket} />
        </Container>
        <SimpleMessageInput socket={socket} />
      </Container>
    </div>
  );
};

export default App;
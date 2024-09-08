import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import React from 'react';

type SimpleMessageInputProps = {
    socket: any;
}

const SimpleMessageInput: React.FC<SimpleMessageInputProps> = ({socket}) => {
    const [messageText, setMessageText] = useState("");
    const [isConnected, setIsConnected] = useState(socket.connected);

    const sendMessage = () => {
        socket.emit("message", { text: messageText});
    };

    const handleEnterKey = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
            setMessageText("");
        }
    };

    return (
        <Container>
            <Form>
                <Form.Label style={{font: "aria", color: "lightgray"}}>
                    Type Message Here
                </Form.Label>
                <Form.Control
                    type="text"
                    id="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => handleEnterKey(e)}
                    autoComplete="off"
                ></Form.Control>
            </Form>
        </Container>
    );

};

export default SimpleMessageInput
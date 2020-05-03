import React, { useState } from "react";
import styled from 'styled-components'
import axiosWithAuth from "../utils/axiosWithAuth";

const FormWrapper = styled.div``;
const Form = styled.form`
    max-width: 500px;
    margin: 10% auto;
    height: 20rem;
    display:flex;
    flex-direction: column;
    justify-items: center;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 2rem;
`;
const Label = styled.label`
    font-size: 2rem;
    text-align:center;
`;
const TextArea = styled.textarea`
    width: 75%;
    font-size:1.3rem;
    margin: 2% auto;
`;
const Input = styled.input`
    width: 50%;
    font-size: 1.5rem;
    margin: 2% auto;
`;
const Button = styled.button`
    width: 30%;
    margin: 2% auto;
    color: white;
    background-color: #4169E1;
    font-size: 1.5rem;
    
`;
const MessageForm = (props) => {
    console.log('whats coming through to messages?', props);
    const id = props.match.params.id;

    const [message, setMessage] = useState({
        message: '',
        date: '',
        student_id: id
    })

    const handleChange = event => {
        setMessage({ ...message, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post(`https://better-professor-back-end.herokuapp.com/messages`, message)
            .then(response => {
                console.log('response after adding student', response.data);
                props.history.push(`/assignments/${id}`)
            })
            .catch(err => console.log(err.response));
    }

    return (
        <FormWrapper>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor='message'>Message:</Label>
                <TextArea
                    required
                    type="text"
                    name="message"
                    placeholder='enter your message here'
                    value={message.message}
                    onChange={handleChange}
                />
                <Label htmlFor='date'>Date:</Label>
                <Input
                    required
                    type="datetime-local"
                    name="date"
                    value={message.date}
                    onChange={handleChange}
                />
                <Button type="submit">Send Message</Button>
            </Form>
        </FormWrapper>
    )
}

export default MessageForm;


import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from 'styled-components';

const CardWrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
`;
const Title = styled.h1`
    width:100%;
    text-align:center;
`;
const MessagesCard = styled.div`
    width: 30%;
    border: 2px solid black;
    padding: 2%;
    margin: 2% 0;
`;
const P = styled.p`
    font-size: 1.3rem;
`;



const ReminderList = (props) => {

    const [reminders, setReminders] = useState([])
    console.log(reminders)
    const id = props.match.params.id
    useEffect(() => {
        axiosWithAuth()
            .get(`https://better-professor-back-end.herokuapp.com/messages/students/${id}`)
            .then(res => {
                console.log(res);
                setReminders([...reminders, ...res.data])
            })
    }, [id])

    return (
        <CardWrapper>
            <Title>Reminders</Title>
            {reminders.map(reminder => {
                return (
                    <MessagesCard>
                        <P>{reminder.message}</P>
                        <P>{reminder.date}</P>
                    </MessagesCard>
                );

            })}

        </CardWrapper>
    )
};

export default ReminderList;
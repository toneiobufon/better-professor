import React, { useState } from "react";

import axiosWithAuth from "../utils/axiosWithAuth"
import styled from "styled-components";

const EditStudentForm = (props) => {
    console.log('what is being passed to editstudentform', props);
    const id = props.match.params.id;
    const [edit, setEdit] = useState({
        student_name: '',
        major: '',
        id: id
    })


    const handleChange = event => {
        setEdit({ ...edit, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .put(`https://better-professor-back-end.herokuapp.com/students/${id}`, edit)
            .then(response => {
                console.log('response after adding student', response.data);
                props.history.push('/')
            })
            .catch(err => {
                console.log("SignUp Login Catch Error: ", err.response.data.message);
                alert(err.response.data.message);
            });
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="student_name"
                    placeholder="Enter New Student Name"
                    onChange={handleChange}
                    value={edit.student_name}
                />
                <input
                    type="text"
                    name="major"
                    placeholder="Update Student Major"
                    onChange={handleChange}
                    value={edit.major}
                />
                <Button type="submit">Edit Student</Button>
            </form>
        </Container>
    )
}


export default EditStudentForm;

const Button = styled.button`
background-color: #4169E1;
color: #fff;

`

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`
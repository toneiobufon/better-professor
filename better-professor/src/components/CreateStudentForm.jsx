import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from "styled-components";
import { connect } from 'react-redux'
import {addStudent} from '../actions/'

const Create = styled.div`
 border: 1px solid black;
 height: 89vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

const Button = styled.button`
background-color: #4169E1;
color: #fff;

`

const CreateStudentForm = (props) => {
    const userId = localStorage.getItem('id')
    const [add, setAdd] = useState({
        student_name: '',
        major: '',
        user_id: userId
    })
    const handleChange = event => {
        setAdd({ ...add, [event.target.name]: event.target.value })
    }

    const Processing = id => {
        props.history.push('/loading');
        setTimeout(()=>{
            props.history.push(`/`)
        }, 1000) 
    }   
    const submitForm = event => {
        event.preventDefault();
        props.addStudent(add)
        Processing()
    }

 
    return (
        <Create>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    name="student_name"
                    placeholder="Enter Student Name"
                    value={add.student_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name="major"
                    placeholder="Enter Student Major (optional)"
                    value={add.major}
                    onChange={handleChange}
                />
                <Button type="submit">Create Student</Button>
            </form>
        </Create>
    )
}
export default connect( state => {
    return {
        students: state.students,
        isFetching: state.isFetching,
        error: state.assignments
    }
}, {addStudent}) (CreateStudentForm);


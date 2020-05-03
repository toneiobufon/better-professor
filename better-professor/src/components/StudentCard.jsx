import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { connect } from 'react-redux'

import {deleteStudent} from "../actions/"



// import {StudentContext} from "../contexts/StudentContext"

const Button = styled.button`
    width: 3rem;
    margin: 2% auto;
    background-color: #4169E1;
    color: #fff;
    font-size: 0.7rem;
    text-decoration: none;
`;

const StudentCard = props => {

    console.log('testing out props')

    // const [erase, setErase] = useState({});

    const id = props.id;

    const Processing = () => {
        props.history.push('/loading');

        setTimeout(()=>{
            props.history.push('/')
        }, 1000) 
    }   

    const deleteStudent = () => {
        props.deleteStudent(id)
        Processing()
    }


    const EditStudent = () => {
        console.log('by god', props)
        props.history.push(`/editstudent/${id}`)
    }

    return (
        <div className="student-card">
            <div>
                <h3>{props.student_name}</h3>
                <p>Major: {props.major}</p>
            </div>
            <Button onClick={EditStudent}>Edit</Button>
            <Button onClick={deleteStudent}>Delete</Button>
            <Link to= {`/assignments/${props.id}`}>
                <Button>View </Button>
            </Link>
   

        </div>


    );
};

export default connect( state => {
    return {
        students: state.students,
        isFetching: state.isFetching,
        error: state.assignments
    }
 }, {deleteStudent}) (StudentCard);
 


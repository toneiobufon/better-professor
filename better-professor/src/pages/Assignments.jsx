import React from "react";
import AssignmentList from '../components/AssignmentList';
import { Link } from 'react-router-dom'
import Reminders from './Reminders'
import styled from "styled-components";

const Assignment = (props) => {
    const id = props.match.params.id
    console.log('assignment', props)
    return (
        <div>
            <Link to={`/addassignment/${id}`}>
                <Button>Add Assignment</Button>
            </Link>

            <AssignmentList {...props} />
            <Reminders {...props} />
        </div>
    )
}

export default Assignment;


const Button = styled.button`
background-color: #4169E1;
color: #fff;
padding: 0.5%;
margin: 1%;
`

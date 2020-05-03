import React from "react";
import StudentList from '../components/StudentList.jsx'
import { Link } from 'react-router-dom'
import styled from "styled-components";


const DashAndStu = styled.div`
    margin-left: 3rem;
    margin-top: 1rem;
`;

const Button = styled.button`
background-color: #4169E1;
color: #fff;
padding: 0.5%;
`

const Dashboard = (props) => {
    console.log('pls help irl :/', props)
    return (
        <div>
            <DashAndStu>
                <Link to='/createstudent'>
                    <Button>Add Student</Button>
                </Link>
            </DashAndStu>
            <StudentList {...props} />
        </div>
    )
}

export default Dashboard;


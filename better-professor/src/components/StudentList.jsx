import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import StudentCard from "./StudentCard"
import MessageForm from "./MessageForm";
import styled from "styled-components";
import { connect } from 'react-redux'
import { getStudent } from "../actions/"

const Stu = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   margin: 3rem;
   max-width: 73rem;
`;

const EachStu = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border: 0.3rem solid #4169E1;
   width: 13rem;
   padding: 2%;
   margin: 1rem 0;
   
`;

const StudentList = (props) => {

   console.log('lets see if this shows', props)

   const id = localStorage.getItem('id')

   useEffect(() => {
      props.getStudent(id)

   }, [])
   return (
      <Stu>
         {props.students.map(student => {
            return (

               <EachStu>
                  <StudentCard {...student} {...props}/>
               </EachStu>
            )
         })}
      </Stu>
   )
}

export default connect( state => {
   return {
       students: state.students,
       isFetching: state.isFetching,
       error: state.assignments
   }
}, {getStudent}) (StudentList);



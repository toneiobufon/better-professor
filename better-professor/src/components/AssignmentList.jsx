import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../utils/axiosWithAuth'

// import {fetchAssignments} from "../actions" 

const CardsWrapperDiv = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   display:flex;
   flex-wrap:wrap;
   justify-content: space-evenly;
   
`

const Title = styled.h1`
   width: 100%;
   text-align:center;
`;

const AssignmentCardDiv = styled.div`
   width: 45%;
   border: 2px solid black;
   margin: 2% 0;
   display:flex;
   flex-wrap:wrap;
   padding: 2%;
`

const AssignmentNameH2 = styled.p`
   width: 100%;
`

const AssignmentDeadlineH3 = styled.p`
   width: 100%;
`
const Button = styled.button`
   width: 30%;
   margin: 2% auto;
   color: white;
   background-color: #4169E1;
   font-size: 1.2rem;
`;

const AssignmentList = (props) => {
   const [assignmentList, setAssignmentList] = useState([]);

   console.log({ assignmentList })
   console.log('where is this coming from??', props)
   useEffect(() => {
      const id = props.match.params.id
      axiosWithAuth()
         .get(`https://better-professor-back-end.herokuapp.com/projects/students/${id}`)
         .then(re => {
            console.log({ re })
            setAssignmentList([...assignmentList, ...re.data])
         })
         .catch(error => {
            console.log(error.message)
         })

   }, [props.match.params.id])

   const sendMessage = () => {
      const id = props.match.params.id
      props.history.push(`/message/${id}`)

   }

   const editAssignment = event => {
      const id = event.target.value
      const student_id = props.match.params.id
      props.history.push(`/assignments/${student_id}/editassignment/${id}`)
   }

   const Processing = id => {
      props.history.push('/loading');
      setTimeout(()=>{
          props.history.push(`/assignments/${id}`)
      }, 1000) 
  }   

   const deleteAssignment = event => {
      const id = event.target.value
      console.log('props.match.params', props.match.params);
      axiosWithAuth()
         .delete(`https://better-professor-back-end.herokuapp.com/projects/${id}`)
         .then(res => {
            console.log('deleted assignment ', res);
            Processing(props.match.params.id)
         })
         .catch(err => console.log(err.response));

   }

  



   return (
      <CardsWrapperDiv>
         <Title>Assignments</Title>
         {assignmentList.map(item => {
            return (
               <AssignmentCardDiv key={item.id}>
                  <AssignmentNameH2>Assignment:{item.project_name}</AssignmentNameH2>
                  <AssignmentDeadlineH3>Deadline: {item.deadline}</AssignmentDeadlineH3>
                  <Button value={item.id} onClick={editAssignment}>Edit </Button>
                  <Button value={item.id} onClick={deleteAssignment}>Delete</Button>
                  <Button onClick={sendMessage}>Send Message</Button>
               </AssignmentCardDiv>
            )
         })}
      </CardsWrapperDiv>
   )
}

export default AssignmentList;

// const mapStateToProps = state => {
//    return {
//       assignments: state.assignments,
//       isFetching: state.isFetching
//    }
// }


// export default connect(
//    mapStateToProps,
//    {fetchAssignments}

// )(AssignmentList)
